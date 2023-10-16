const { convertToPounds } = require('./convert-currency')

const calculateReduction = (valueInPence, reductionRate) => {
  const reduction = Math.floor(valueInPence * reductionRate.rate)
  let payment = Math.ceil(valueInPence - reduction)
  const variation = valueInPence - reduction - payment
  payment += variation

  return {
    schemeYear: reductionRate.schemeYear,
    bpsValue: convertToPounds(valueInPence),
    rate: reductionRate.rate,
    reductionInPence: reduction,
    reduction: convertToPounds(reduction),
    paymentInPence: payment,
    payment: convertToPounds(payment)
  }
}

module.exports = calculateReduction
