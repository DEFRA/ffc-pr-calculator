
const bands = require('../../calculation/bands')
const schemeYears = require('../../calculation/scheme-years')

function thousandsSeparators (num) {
  const numParts = num.toString().split('.')
  numParts[0] = numParts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  return numParts.join('.')
}

function GetBandText (band) {
  return bands.find(x => x.band === band).text
}

function toRow (results, property, formatType) {
  const data = []
  data.push({ text: GetBandText(results.band) })
  results.result.map((x) => {
    data.push(
      {
        text: (formatType === 'currency'
          ? `£${thousandsSeparators(x[property].toFixed(2))}`
          : `${Math.round(x[property] * 100)}%`),
        format: 'numeric'
      })
    return x
  })
  return fillGaps(results, data, formatType)
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

function overallToRow (overallResult, property) {
  const data = []
  data.push({
    text: `£${thousandsSeparators(overallResult[property].toFixed(2))}`,
    format: 'numeric',
    classes: 'govuk-body govuk-!-font-weight-bold'
  })
  return data
}

function populateOverall (calculations, property, text) {
  const overall = calculations.overallResult.map(x => overallToRow(x, property))
  overall.unshift({ text: text })
  return overall
}

function populateData (calculations, options) {
  const reductionData = calculations.bandResult.map(x => toRow(x, options.property, options.formatType))
  if (options.showOverall) {
    reductionData.push(populateOverall(calculations, options.property, options.text).flat())
  }
  return reductionData
}

function createSummary (bpsValue, bpsMultipleValue) {
  let titleText = ''
  Object.keys(bpsMultipleValue).length === 0
    ? titleText = `Your progressive reductions based on a BPS payment of £${bpsValue} have been estimated`
    : titleText = `Your progressive reductions based on BPS payments of £${bpsMultipleValue.bps2021Value} in 2021, £${bpsMultipleValue.bps2022Value} in 2022, 
                £${bpsMultipleValue.bps2023Value} in 2023 and 
                £${bpsMultipleValue.bps2024Value} in 2024 have been estimated`

  return {
    titleText
  }
}

function createTableDefinition (calculations, options) {
  return {
    caption: options.caption,
    captionClasses: 'govuk-table__caption--l',
    firstCellIsHeader: true,
    head: [
      {
        text: 'scheme year',
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
    ],
    rows: populateData(calculations, options)
  }
}

module.exports = function ViewModel (bpsValue, calculations) {
  this.model = {
    paymentBand: createTableDefinition(calculations, { property: 'rate', text: '', caption: 'Payment band', formatType: 'percentage', showOverall: false }),
    payment: createTableDefinition(calculations, { property: 'payment', text: 'Payment value after progressive reductions:', caption: 'Payments within each band', formatType: 'currency', showOverall: true }),
    reduction: createTableDefinition(calculations, { property: 'reduction', text: 'Total progressive reduction:', caption: 'Reductions within each band', formatType: 'currency', showOverall: true }),
    confirmation: createSummary(bpsValue, calculations.multipleValues)
  }
}
