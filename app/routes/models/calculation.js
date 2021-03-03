
const bands = require('../../calculation/bands')

function GetBandText (band) {
  return bands.find(x => x.band === band).text
}

function toRow (results, property, formatType) {
  const data = []
  data.push({ text: GetBandText(results.band) })
  results.result.map(x => data.push(
    {
      text: (formatType === 'currency'
        ? `£${x[property].toFixed(2)}`
        : `${Math.round(x[property] * 100)}%`),
      format: 'numeric'
    }))
  return data
}

function overallToRow (overallResult, property) {
  const data = []
  data.push({
    text: `£${overallResult[property].toFixed(2)}`,
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

function populateData (calculations, property, text, formatType, showOverall) {
  const reductionData = calculations.bandResult.map(x => toRow(x, property, formatType))
  if (showOverall) {
    reductionData.push(populateOverall(calculations, property, text).flat())
  }
  return reductionData
}

function createSummary (bpsValue, bpsMultipleValue) {

  let titleText = ''
  Object.keys(bpsMultipleValue).length === 0 ? 
  titleText = `Your progressive reductions based on a BPS payment of £${bpsValue} have been estimated` : 
  titleText = `Your progressive reductions based on a BPS payments of £${bpsMultipleValue.bps2021Value} in 2021, £${bpsMultipleValue.bps2022Value} in 2022, 
                £${bpsMultipleValue.bps2023Value} in 2023 and 
                £${bpsMultipleValue.bps2024Value} in 2024 have been estimated`

  return {
    titleText
  }
}

function createTableDefinition (calculations, property, text, caption, formatType = 'currency', showOverall = true) {
  return {
    caption: caption,
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
    rows: populateData(calculations, property, text, formatType, showOverall)
  }
}

module.exports = function ViewModel (bpsValue, calculations) {
  this.model = {
    paymentBand: createTableDefinition(calculations, 'rate', '', 'Payment band', 'percentage', false),
    payment: createTableDefinition(calculations, 'payment', 'Payment value after progressive reductions:', 'Payments within each band'),
    reduction: createTableDefinition(calculations, 'reduction', 'Total progressive reduction:', 'Reductions within each band'),
    confirmation: createSummary(bpsValue, calculations.multipleValues)
  }
}
