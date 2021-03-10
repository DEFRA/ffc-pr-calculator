const paymentBandThresholds = require('./payment-band-thresholds')

module.exports = function getPaymentBands (schemeYear, bpsValueInPence) {
  const paymentBands = []

  if (bpsValueInPence <= paymentBandThresholds.band1) {
    paymentBands.push({ band: 1, value: bpsValueInPence, schemeYear })
    return paymentBands
  }

  if (bpsValueInPence <= paymentBandThresholds.band2) {
    paymentBands.push({ band: 1, value: paymentBandThresholds.band1, schemeYear })
    paymentBands.push({ band: 2, value: (bpsValueInPence - paymentBandThresholds.band1), schemeYear })
    return paymentBands
  }

  if (bpsValueInPence <= paymentBandThresholds.band3) {
    paymentBands.push({ band: 1, value: paymentBandThresholds.band1, schemeYear })
    paymentBands.push({ band: 2, value: paymentBandThresholds.band2 - paymentBandThresholds.band1, schemeYear })
    paymentBands.push({ band: 3, value: (bpsValueInPence - paymentBandThresholds.band2), schemeYear })
    return paymentBands
  }

  if (bpsValueInPence > paymentBandThresholds.band3) {
    paymentBands.push({ band: 1, value: paymentBandThresholds.band1, schemeYear })
    paymentBands.push({ band: 2, value: paymentBandThresholds.band2 - paymentBandThresholds.band1, schemeYear })
    paymentBands.push({ band: 3, value: paymentBandThresholds.band3 - paymentBandThresholds.band2, schemeYear })
    paymentBands.push({ band: 4, value: (bpsValueInPence - paymentBandThresholds.band3), schemeYear })
    return paymentBands
  }
}
