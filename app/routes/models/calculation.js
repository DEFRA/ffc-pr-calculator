
const bands = require('../../calculation/bands')
const schemeYears = require('../../calculation/scheme-years')
const toCurrencyString = require('../../utils/to-currency-string')

function ViewModel (value, calculations) {
  this.model = {
    confirmation: createSummary(value),
    paymentBand: createTableDefinition(calculations, { property: 'rate', text: '', caption: 'Progressive reductions standard figures', formatType: 'percentage', showOverall: false }),
    reduction: createTableDefinition(calculations, { property: 'reduction', text: 'Total progressive reduction:', caption: 'Your progressive reductions', formatType: 'currency', showOverall: true }),
    paymentSummary: createPaymentSummary(calculations, { caption: 'Overview' }),
    backLink: createBackLink()
  }
}

function createSummary (value) {
  return `Your estimated progressive reductions are based on a starting payment amount of ${toCurrencyString(value)}.`
}

function createTableDefinition (calculations, options) {
  return {
    caption: options.caption,
    captionClasses: 'govuk-table__caption--m',
    firstCellIsHeader: true,
    head: getHeaderRow(),
    rows: populateData(calculations, options)
  }
}

function createPaymentSummary (calculations, options) {
  const data = []
  calculations.overallResult.map((x) => {
    data.push(
      [
        { text: x.schemeYear.toString(), format: 'numeric' },
        { text: toCurrencyString(x.reduction), format: 'numeric' },
        { text: toCurrencyString(x.payment), format: 'numeric', classes: 'govuk-body govuk-!-font-weight-bold' }
      ]
    )
    return x
  })

  return {
    caption: options.caption,
    captionClasses: 'govuk-table__caption--m',
    firstCellIsHeader: true,
    head: getSummaryHeaderRow(),
    rows: data
  }
}

function getHeaderRow () {
  return [
    {
      text: 'Scheme year',
      classes: 'govuk-!-width-one-half'
    },
    {
      text: '2021',
      format: 'numeric'
    },
    {
      text: '2022',
      format: 'numeric'
    },
    {
      text: '2023',
      format: 'numeric'
    }
  ]
}

function getSummaryHeaderRow () {
  return [
    {
      text: 'Scheme year'
    },
    {
      text: 'Total estimated reductions',
      format: 'numeric'
    },
    {
      text: 'Estimated payments',
      format: 'numeric'
    }
  ]
}

function populateData (calculations, options) {
  const reductionData = calculations.bandResult.map(x => toRow(x, options.property, options.formatType))
  if (options.showOverall) {
    reductionData.push(populateOverall(calculations, options.property, options.text).flat())
  }
  return reductionData
}

function toRow (results, property, formatType) {
  const data = []
  data.push({ text: getBandText(results.band) })
  results.result.map((x) => {
    data.push(
      {
        text: (formatType === 'currency'
          ? toCurrencyString(x[property])
          : calculatePercentage(x, property)),
        format: 'numeric'
      })
    return x
  })
  return fillGaps(results, data, formatType)
}

function getBandText (band) {
  return bands.find(x => x.band === band).text
}

function calculatePercentage (x, property) {
  return `${x.payment > 0 ? Math.round(x[property] * 100) : 0}%`
}

function fillGaps (results, data, formatType) {
  const checkSchemeYears = results.result.map(x => x.schemeYear)
  const maxSchemeYear = Math.max.apply(Math, schemeYears)
  const minSchemeYear = Math.min.apply(Math, schemeYears)

  const missingData = {
    text: (formatType === 'currency'
      ? '£0.00'
      : '0%'),
    format: 'numeric'
  }

  let yearIncrementCount = 0

  for (let i = minSchemeYear; i <= maxSchemeYear; i++) {
    yearIncrementCount++
    if (checkSchemeYears.indexOf(i) < 0) {
      data.splice(yearIncrementCount, 0, missingData)
    }
  }

  return data
}

function populateOverall (calculations, property, text) {
  const overall = calculations.overallResult.map((x, index) => overallToRow(x, property, index))
  overall.unshift({ text: text })
  return overall
}

function overallToRow (overallResult, property, index) {
  const data = []
  data.push({
    schemeYear: schemeYears[index],
    text: toCurrencyString(overallResult[property]),
    format: 'numeric',
    classes: 'govuk-body govuk-!-font-weight-bold'
  })
  return data
}

function createBackLink () {
  return {
    text: 'Back',
    href: '/value'
  }
}

module.exports = ViewModel
