
const bands = require('../../calculation/bands')
const schemeYears = require('../../calculation/scheme-years')
const toCurrencyString = require('../../utils/to-currency-string')

function ViewModel (values, calculations) {
  const isSingleValue = isSingleValueOnly(values)
  console.log(createPaymentSummary(calculations))
  this.model = {
    isSingleValue,
    confirmation: createSummary(isSingleValue, values),
    startingAmount: isSingleValue ? undefined : createStartingAmountTable(values),
    paymentBand: createTableDefinition(calculations, { property: 'rate', text: '', caption: 'Progressive reductions', formatType: 'percentage', showOverall: false }),
    reduction: createTableDefinition(calculations, { property: 'reduction', text: 'Total progressive reduction:', caption: 'Your progressive reductions', formatType: 'currency', showOverall: true }),
    payment: createPaymentTable(calculations),
    paymentSummary: createPaymentSummary(calculations),
    backLink: createBackLink(isSingleValue)
  }
}

function isSingleValueOnly (values) {
  return values.value !== undefined
}

function createSummary (isSingleValue, values) {
  return isSingleValue
    ? `Your estimated progressive reductions are based on a starting payment amount of ${toCurrencyString(values.value)}.`
    : 'Your estimated progressive reductions are based on starting payment amounts of:'
}

function createStartingAmountTable (values) {
  return {
    caption: 'Starting amounts',
    captionClasses: 'govuk-table__caption--m',
    firstCellIsHeader: true,
    head: getHeaderRow(),
    rows: [
      [
        {
          text: 'Starting amount'
        },
        {
          text: values.value2021 ? toCurrencyString(values.value2021) : '£0.00',
          format: 'numeric'
        },
        {
          text: values.value2022 ? toCurrencyString(values.value2022) : '£0.00',
          format: 'numeric'
        },
        {
          text: values.value2023 ? toCurrencyString(values.value2023) : '£0.00',
          format: 'numeric'
        },
        {
          text: values.value2024 ? toCurrencyString(values.value2024) : '£0.00',
          format: 'numeric'
        }
      ]
    ]
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

function createPaymentTable (calculations) {
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

function createPaymentSummary (calculations) {
  return {
    classes: 'govuk-summary-list',
    rows: populateOverallSummary(calculations, 'payment', 'Payment value after progressive reductions:').flat()
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
    },
    {
      text: '2024',
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

function populateOverallSummary (calculations, property, text) {
  const overall = calculations.overallResult.map((x, index) => {
    const overallResults = overallToRow(x, property, index)
    return { key: { text: overallResults[0].schemeYear }, value: { text: overallResults[0].text } }
  })
  return overall
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

function createBackLink (hasSingleValue) {
  return {
    text: 'Back',
    href: hasSingleValue ? '/value' : '/values'
  }
}

module.exports = ViewModel
