const bands = require('../../calculation/bands')
const { schemeYears } = require('../../calculation/scheme-years')
const toCurrencyString = require('../../utils/to-currency-string')
const schedule = require('../../utils/year-tab-schedule')

function ViewModel (value, calculations) {
  const delinkedCalculation = {
    ...calculations
  }

  this.model = {
    years: schemeYears,
    year: {}
  }

  schemeYears.forEach(year => {
    this.model.year[year] = {
      confirmation: createSummary(value),
      paymentBand: createPaymentBandTable(delinkedCalculation, {
        property: 'rate',
        text: '',
        caption: `Percentage reduction for ${year}`,
        formatType: 'percentage',
        showOverall: false,
        year
      }),
      reduction: createTableDefinition(delinkedCalculation, {
        property: 'reduction',
        text: 'Total progressive reduction',
        caption: `Progressive reduction applied to your payment for ${year}`,
        formatType: 'currency',
        showOverall: true,
        year
      }),
      paymentSummary: createPaymentSummary(delinkedCalculation, {
        caption: `Estimated delinked payment in ${year}`,
        year
      }),
      schedule: {
        text: getScheduleText(year),
        caption: `Payment schedule for ${year}`
      }
    }
  })
}

const getScheduleText = (year) => {
  const yearSchedule = schedule.find(s => s.year === year)
  return yearSchedule ? yearSchedule.text : ''
}

function createPaymentBandTable (calculations, options) {
  return {
    caption: options.caption,
    captionClasses: 'govuk-table__caption--m',
    firstCellIsHeader: true,
    head: getPaymentBandHeaderRow(options.year),
    rows: populateData(calculations, options)
  }
}

function createTableDefinition (calculations, options) {
  return {
    caption: options.caption,
    captionClasses: 'govuk-table__caption--m',
    firstCellIsHeader: true,
    head: getHeaderRow(options.year),
    rows: populateData(calculations, options)
  }
}

function createPaymentSummary (calculations, options) {
  const data = []
  calculations.overallResult
    .filter(x => x.schemeYear === options.year)
    .forEach(x => {
      data.push([
        { text: x.schemeYear.toString(), format: 'numeric' },
        { text: toCurrencyString(x.reduction), format: 'numeric' },
        { text: toCurrencyString(x.payment), format: 'numeric', classes: 'govuk-body govuk-!-font-weight-bold' }
      ])
    })

  return {
    caption: options.caption,
    captionClasses: 'govuk-table__caption--m',
    firstCellIsHeader: true,
    head: getSummaryHeaderRow(),
    rows: data
  }
}

function createSummary (value) {
  return `Your estimated delinked payment is based on a reference amount of ${toCurrencyString(value)}, with a progressive reduction applied.`
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

function getPaymentBandHeaderRow (year) {
  return [
    {
      text: 'Scheme year',
      classes: 'govuk-!-width-one-half'
    },
    {
      text: year.toString(),
      format: 'numeric'
    }
  ]
}

function getHeaderRow (year) {
  return [
    {
      text: 'Payment band',
      classes: 'govuk-!-width-one-half'
    },
    {
      text: year.toString(),
      format: 'numeric'
    }
  ]
}

function populateData (calculations, options) {
  const reductionData = calculations.bandResult.map(x =>
    toRow(x, options.property, options.formatType, options.year)
  )
  if (options.showOverall) {
    reductionData.push(populateOverall(calculations, options.property, options.text, options.year).flat())
  }
  return reductionData
}

function toRow (delinkedResults, property, formatType, year) {
  const results = {
    ...delinkedResults,
    result: delinkedResults.result.filter(r => r.schemeYear === year)
  }

  const data = []
  data.push({ text: getBandText(results.band) })
  results.result.forEach((x) => {
    data.push({
      text: (formatType === 'currency'
        ? toCurrencyString(x[property])
        : calculatePercentage(x, property)),
      format: 'numeric'
    })
  })
  return fillGaps(results, data, formatType)
}

function getBandText (band) {
  return bands.find(x => x.band === band).text
}

function calculatePercentage (x, property) {
  if (Math.abs(x[property] - 1) < 0.0000001) {
    return '100%'
  }
  return `${x.payment > 0 ? Math.round(x[property] * 100) : 0}%`
}

function fillGaps (results, data, formatType) {
  const checkSchemeYears = results.result.map(x => x.schemeYear)
  const maxSchemeYear = Math.max(Math, ...schemeYears)
  const minSchemeYear = Math.min(Math, ...schemeYears)

  const missingData = {
    text: (formatType === 'currency' ? '£0.00' : '0%'),
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

function populateOverall (calculations, property, text, year) {
  const overall = calculations.overallResult
    .filter(x => x.schemeYear === year)
    .map((x, index) => overallToRow(x, property, index))
  overall.unshift({ text })
  return overall
}

function overallToRow (overallResult, property, index) {
  return [{
    schemeYear: overallResult.schemeYear,
    text: toCurrencyString(overallResult[property]),
    format: 'numeric',
    classes: 'govuk-body govuk-!-font-weight-bold'
  }]
}

module.exports = ViewModel
