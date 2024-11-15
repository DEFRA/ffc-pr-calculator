const { convertToPounds } = require('./convert-currency')

const calculateReduction = (valueInPence, reductionRate) => {
  // Calculate band-specific reduction using proper thresholds
  const bandValue = reductionRate.threshold
    ? Math.min(valueInPence, reductionRate.threshold)
    : valueInPence

  // Ensure rate cannot exceed 1.0 (100%)
  const effectiveRate = Math.min(reductionRate.rate, 1.0)

  const reduction = Math.floor(bandValue * effectiveRate)
  const payment = bandValue - reduction

  console.log('Calculated values:', {
    bandValue,
    effectiveRate,
    reduction,
    payment
  })

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
