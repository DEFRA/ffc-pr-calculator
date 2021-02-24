
const bands = require('../../calculation/bands')

function GetBandText(band) {
  return bands.find(x => x.band === band).text
}

function reductionToRow (bandResults) {
  const data = []
  data.push({ text: GetBandText(bandResults.band) })
  bandResults.result.map(x => data.push({ text: `£${x.reduction.toFixed(2)}` } ))
  return data
}

function reductionOverallToRow (overallResult) {
  const data = []
  data.push({text : `£${overallResult.reduction.toFixed(2)}`})
  return data
}

function paymentOverallToRow (overallResult) {
  const data = []
  data.push({text : `£${overallResult.payment.toFixed(2)}`})
  return data
}

function populateReductionData (calculations) {
  const reductionData = calculations.bandResult.map(reductionToRow)
  const overall = calculations.overallResult.map(reductionOverallToRow)
  overall.unshift({text: 'Total progressive reduction:'})
  reductionData.push(overall.flat())
  return reductionData
}

function paymentToRow (calculation) {
  const data = []
  data.push({ text: GetBandText(calculation.band) })
  calculation.result.map(x => data.push({ text: `£${x.payment.toFixed(2)}` }))
  return data
}

function populatePaymentBandData (calculations) {
  return calculations.bandResult.map(paymentBandToRow)
}

function populatePaymentData (calculations) {
  const paymentData = calculations.bandResult.map(paymentToRow)
  const overall = calculations.overallResult.map(paymentOverallToRow)
  overall.unshift({text: 'Payment value after progressive reductions:'})
  paymentData.push(overall.flat())
  return paymentData
}

function paymentBandToRow (calculation) {
  const data = []
  data.push({ text: GetBandText(calculation.band) })
  calculation.result.map(x => data.push({ text: `${x.rate * 100}%` }))
  console.log(calculation.result)
  return data
}

function createReductionTableDefinition (calculations) {
  return {
    caption: 'Reductions within each band',
    captionClasses: 'govuk-table__caption--l',
    firstCellIsHeader: true,
    head: [
      {
        text: 'scheme year'
      },
      {
        text: '2021'
      },
      {
        text: '2022'
      },
      {
        text: '2023'
      },
      {
        text: '2024'
      }
    ],
    rows: populateReductionData(calculations)
  }
}

function createPaymentBandTableDefinition (calculations) {
  return {
    caption: 'Payment band',
    captionClasses: 'govuk-table__caption--l',
    firstCellIsHeader: true,
    head: [
      {
        text: 'scheme year'
      },
      {
        text: '2021'
      },
      {
        text: '2022'
      },
      {
        text: '2023'
      },
      {
        text: '2024'
      }
    ],
    rows: populatePaymentBandData(calculations)
  }
}

function createPaymentTableDefinition (calculations) {
  return {
    caption: 'Payments within each band',
    captionClasses: 'govuk-table__caption--l',
    firstCellIsHeader: true,
    head: [
      {
        text: 'scheme year'
      },
      {
        text: '2021'
      },
      {
        text: '2022'
      },
      {
        text: '2023'
      },
      {
        text: '2024'
      }
    ],
    rows: populatePaymentData(calculations)
  }
}

module.exports = function ViewModel (calculations) {
  this.model = { paymentBand: createPaymentBandTableDefinition(calculations), reduction: createReductionTableDefinition(calculations), payment: createPaymentTableDefinition(calculations) }
}
