const { convertToPounds } = require('./convert-currency')

module.exports = function calculateReduction (bpsValueInPence, reductionRate) {
  const reduction = Math.floor(bpsValueInPence * reductionRate.rate)
  let payment = Math.ceil(bpsValueInPence - reduction)
  const variation = bpsValueInPence - reduction - payment
  payment += variation

  return {
    schemeYear: reductionRate.schemeYear,
    bpsValue: convertToPounds(bpsValueInPence),
    rate: reductionRate.rate,
    reductionInPence: reduction,
    reduction: convertToPounds(reduction),
    paymentInPence: payment,
    payment: convertToPounds(payment)
  }
}
