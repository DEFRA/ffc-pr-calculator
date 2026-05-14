const {
  getBandHeaderRow,
  populateData,
  createSummary
} = require('./calculation-helpers')

function viewModel (value, calculations) {
  this.model = {
    confirmation: createSummary(value),
    paymentBand: createTable(calculations, {
      property: 'rate',
      caption: 'Percentage reductions by scheme year',
      formatType: 'percentage',
      showOverall: false
    }),
    reduction: createTable(calculations, {
      property: 'reduction',
      text: 'Total progressive reduction:',
      caption: 'Progressive reductions applied to your claim by scheme year',
      formatType: 'currency',
      showOverall: true
    }),
    paymentSummary: createPaymentSummary(calculations)
  }
}

const createTable = (calculations, options) => ({
  caption: options.caption,
  captionClasses: 'govuk-table__caption--m',
  firstCellIsHeader: true,
  head: getBandHeaderRow(false),
  rows: populateData(calculations, options).map(r => r.slice(0, 4))
})

const createPaymentSummary = (calculations) => ({
  caption: 'Estimated BPS payments 2021 to 2023',
  captionClasses: 'govuk-table__caption--m',
  firstCellIsHeader: true,
  head: [
    { text: 'Scheme year' },
    { text: 'Total estimated reductions', format: 'numeric' },
    { text: 'Total estimated payments', format: 'numeric' }
  ],
  rows: calculations.overallResult.map(x => [
    { text: x.schemeYear.toString(), format: 'numeric' },
    { text: require('../../utils/to-currency-string')(x.reduction), format: 'numeric' },
    {
      text: require('../../utils/to-currency-string')(x.payment),
      format: 'numeric',
      classes: 'govuk-body govuk-!-font-weight-bold'
    }
  ]).slice(0, 3)
})

module.exports = viewModel
