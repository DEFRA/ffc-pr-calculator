const paymentBandThresholds = require('./payment-band-thresholds')

module.exports = function getPaymentBands (schemeYear, valueInPence) {
  const paymentBands = []

  if (valueInPence <= paymentBandThresholds.band1) {
    paymentBands.push({ band: 1, value: valueInPence, schemeYear })
    return paymentBands
  }

  if (valueInPence <= paymentBandThresholds.band2) {
    paymentBands.push({ band: 1, value: paymentBandThresholds.band1, schemeYear })
    paymentBands.push({ band: 2, value: (valueInPence - paymentBandThresholds.band1), schemeYear })
    return paymentBands
  }

  if (valueInPence <= paymentBandThresholds.band3) {
    paymentBands.push({ band: 1, value: paymentBandThresholds.band1, schemeYear })
    paymentBands.push({ band: 2, value: paymentBandThresholds.band2 - paymentBandThresholds.band1, schemeYear })
    paymentBands.push({ band: 3, value: (valueInPence - paymentBandThresholds.band2), schemeYear })
    return paymentBands
  }

  if (valueInPence > paymentBandThresholds.band3) {
    paymentBands.push({ band: 1, value: paymentBandThresholds.band1, schemeYear })
    paymentBands.push({ band: 2, value: paymentBandThresholds.band2 - paymentBandThresholds.band1, schemeYear })
    paymentBands.push({ band: 3, value: paymentBandThresholds.band3 - paymentBandThresholds.band2, schemeYear })
    paymentBands.push({ band: 4, value: (valueInPence - paymentBandThresholds.band3), schemeYear })
    return paymentBands
  }
}
