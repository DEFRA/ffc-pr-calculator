const bands = require('../../calculation/bands')
const schemeYears = require('../../calculation/scheme-years')
const toCurrencyString = require('../../utils/to-currency-string')

function ViewModel (value, calculations) {
  const delinkedCalculation = {
    ...calculations,
    overallResult: calculations.overallResult.slice(-1)
  }
  this.model = {
    confirmation: createSummary(value),
    paymentBand: createPaymentBandTable(delinkedCalculation, { property: 'rate', text: '', caption: 'Percentage reduction for 2024', formatType: 'percentage', showOverall: false }),
    reduction: createTableDefinition(delinkedCalculation, { property: 'reduction', text: 'Total progressive reduction', caption: 'Progressive reduction applied to your payment for 2024', formatType: 'currency', showOverall: true }),
    paymentSummary: createPaymentSummary(delinkedCalculation, { caption: 'Estimated delinked payment in 2024' })
  }
}

function createSummary (value) {
  return `Your estimated delinked payment is based on a reference amount of ${toCurrencyString(value)}, with a progressive reduction applied.`
}

function createPaymentBandTable (calculations, options) {
  return {
    caption: options.caption,
    captionClasses: 'govuk-table__caption--m',
    firstCellIsHeader: true,
    head: getPaymentBandHeaderRow(),
    rows: populateData(calculations, options)
  }
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

function getPaymentBandHeaderRow () {
  return [
    {
      text: 'Scheme year',
      classes: 'govuk-!-width-one-half'
    },
    {
      text: '2024',
      format: 'numeric'
    }
  ]
}

function getHeaderRow () {
  return [
    {
      text: 'Payment band',
      classes: 'govuk-!-width-one-half'
    },
    {
      text: '2024',
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
      text: 'Total estimated reduction',
      format: 'numeric'
    },
    {
      text: 'Total estimated payment',
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

function toRow (delinkedResults, property, formatType) {
  const results = {
    ...delinkedResults,
    result: delinkedResults.result.slice(-1)

  }
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
  const maxSchemeYear = Math.max(Math, ...schemeYears)
  const minSchemeYear = Math.min(Math, ...schemeYears)

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
  overall.unshift({ text })
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

module.exports = ViewModel
