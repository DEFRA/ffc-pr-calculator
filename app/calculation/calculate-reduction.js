const { convertToPounds } = require('./convert-currency')

const calculateReduction = (valueInPence, reductionRate) => {
  const bandValue = reductionRate.threshold
    ? Math.min(valueInPence, reductionRate.threshold)
    : valueInPence

  const effectiveRate = Math.min(reductionRate.rate, 1.0)

  const reduction = Math.floor(bandValue * effectiveRate)
  const payment = bandValue - reduction

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
