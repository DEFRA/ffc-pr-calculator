
const bands = require('../../calculation/bands')
const schemeYears = require('../../calculation/scheme-years')
const toCurrencyString = require('../../utils/to-currency-string')

function ViewModel (value, calculations) {
  this.model = {
    confirmation: createSummary(value),
    paymentBand: createTableDefinition(calculations, { property: 'rate', text: '', caption: 'Progressive reductions', formatType: 'percentage', showOverall: false }),
    reduction: createTableDefinition(calculations, { property: 'reduction', text: 'Total progressive reduction:', caption: 'Your progressive reductions', formatType: 'currency', showOverall: true }),
    payment: createPaymentTable(calculations),
    paymentSummary: createPaymentSummary(calculations)
  }
}

const createSummary = (value) => {
  return `Your estimated progressive reductions are based on a starting payment amount of ${toCurrencyString(value)}.`
}

const createTableDefinition = (calculations, options) => {
  return {
    caption: options.caption,
    captionClasses: 'govuk-table__caption--m',
    firstCellIsHeader: true,
    head: getHeaderRow(),
    rows: populateData(calculations, options)
  }
}

const createPaymentTable = (calculations) => {
  return {
    caption: 'Your payments after progressive reductions',
    captionClasses: 'govuk-table__caption--m',
    firstCellIsHeader: true,
    head: getHeaderRow(),
    rows: [
      populateOverall(calculations, 'payment', 'Payment value after progressive reductions:').flat()
    ]
  }
}

const createPaymentSummary = (calculations) => {
  return {
    classes: 'govuk-summary-list',
    rows: populateOverallSummary(calculations, 'payment', 'Payment value after progressive reductions:').flat()
  }
}

const getHeaderRow = () => {
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
    },
    {
      text: '2024',
      format: 'numeric'
    }
  ]
}

const populateData = (calculations, options) => {
  const reductionData = calculations.bandResult.map(x => toRow(x, options.property, options.formatType))
  if (options.showOverall) {
    reductionData.push(populateOverall(calculations, options.property, options.text).flat())
  }
  return reductionData
}

const toRow = (results, property, formatType) => {
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

const getBandText = (band) => {
  return bands.find(x => x.band === band).text
}

const calculatePercentage = (x, property) => {
  return `${x.payment > 0 ? Math.round(x[property] * 100) : 0}%`
}

const fillGaps = (results, data, formatType) => {
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

const populateOverallSummary = (calculations, property, text) => {
  return calculations.overallResult.map((x, index) => {
    const overallResults = overallToRow(x, property, index)
    return { key: { text: overallResults[0].schemeYear }, value: { text: overallResults[0].text } }
  })
}

const populateOverall = (calculations, property, text) => {
  const overall = calculations.overallResult.map((x, index) => overallToRow(x, property, index))
  overall.unshift({ text })
  return overall
}

const overallToRow = (overallResult, property, index) => {
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
