const bands = require('../../calculation/bands')
const { schemeYears } = require('../../calculation/scheme-years')
const toCurrencyString = require('../../utils/to-currency-string')

const getHeaderRowBase = (include2024 = false) => [
  {
    text: 'Scheme year',
    classes: 'govuk-!-width-one-half'
  },
  { text: '2021', format: 'numeric' },
  { text: '2022', format: 'numeric' },
  { text: '2023', format: 'numeric' },
  ...(include2024 ? [{ text: '2024', format: 'numeric' }] : [])
]

const getBandHeaderRow = (include2024 = false) => [
  {
    text: 'Payment band',
    classes: 'govuk-!-width-one-half'
  },
  ...getHeaderRowBase(include2024).slice(1)
]

const getBandText = (band) => {
  return bands.find(x => x.band === band).text
}

const calculatePercentage = (x, property) => {
  return `${x.payment > 0 ? Math.round(x[property] * 100) : 0}%`
}

const fillGaps = (results, data, formatType) => {
  const checkSchemeYears = results.result.map(x => x.schemeYear)
  const maxSchemeYear = Math.max(...schemeYears)
  const minSchemeYear = Math.min(...schemeYears)

  const missingData = {
    text: formatType === 'currency' ? '£0.00' : '0%',
    format: 'numeric'
  }

  let yearIncrementCount = 0

  for (let i = minSchemeYear; i <= maxSchemeYear; i++) {
    yearIncrementCount++
    if (!checkSchemeYears.includes(i)) {
      data.splice(yearIncrementCount, 0, missingData)
    }
  }

  return data
}

const toRow = (results, property, formatType) => {
  const data = [{ text: getBandText(results.band) }]

  results.result.forEach((x) => {
    data.push({
      text:
        formatType === 'currency'
          ? toCurrencyString(x[property])
          : calculatePercentage(x, property),
      format: 'numeric'
    })
  })

  return fillGaps(results, data, formatType)
}

const populateData = (calculations, options) => {
  const rows = calculations.bandResult.map(x =>
    toRow(x, options.property, options.formatType)
  )

  if (options.showOverall) {
    rows.push(populateOverall(calculations, options.property, options.text).flat())
  }

  return rows
}

const overallToRow = (overallResult, property, index) => [{
  schemeYear: schemeYears[index],
  text: toCurrencyString(overallResult[property]),
  format: 'numeric',
  classes: 'govuk-body govuk-!-font-weight-bold'
}]

const populateOverall = (calculations, property, text) => {
  const overall = calculations.overallResult.map((x, i) =>
    overallToRow(x, property, i)
  )
  overall.unshift({ text })
  return overall
}

const populateOverallSummary = (calculations, property) => {
  return calculations.overallResult.map((x, index) => {
    const row = overallToRow(x, property, index)[0]
    return {
      key: { text: row.schemeYear },
      value: { text: row.text }
    }
  })
}

const createSummary = (value) =>
  `Your estimated progressive reductions are based on a starting payment amount of ${toCurrencyString(value)}.`

module.exports = {
  getBandHeaderRow,
  getHeaderRowBase,
  populateData,
  populateOverall,
  populateOverallSummary,
  createSummary
}
