const {
  getBandHeaderRow,
  populateData,
  populateOverall,
  populateOverallSummary,
  createSummary
} = require('./calculation-helpers')

function viewModel (value, calculations) {
  this.model = {
    confirmation: createSummary(value),
    paymentBand: createTable(calculations, {
      property: 'rate',
      caption: 'Progressive reductions',
      formatType: 'percentage',
      showOverall: false
    }),
    reduction: createTable(calculations, {
      property: 'reduction',
      text: 'Total progressive reduction:',
      caption: 'Your progressive reductions',
      formatType: 'currency',
      showOverall: true
    }),
    payment: createPaymentTable(calculations),
    paymentSummary: createPaymentSummary(calculations)
  }
}

const createTable = (calculations, options) => ({
  caption: options.caption,
  captionClasses: 'govuk-table__caption--m',
  firstCellIsHeader: true,
  head: getBandHeaderRow(true),
  rows: populateData(calculations, options)
})

const createPaymentTable = (calculations) => ({
  caption: 'Your payments after progressive reductions',
  captionClasses: 'govuk-table__caption--m',
  firstCellIsHeader: true,
  head: getBandHeaderRow(true),
  rows: [
    populateOverall(
      calculations,
      'payment',
      'Payment value after progressive reductions:'
    ).flat()
  ]
})

const createPaymentSummary = (calculations) => ({
  classes: 'govuk-summary-list',
  rows: populateOverallSummary(
    calculations,
    'payment'
  )
})

module.exports = viewModel
