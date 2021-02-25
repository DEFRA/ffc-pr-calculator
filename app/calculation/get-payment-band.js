const paymentBandThresholds = require('./payment-band-thresholds')

module.exports = function getPaymentBands (bpsValueInPence) {
  const paymentBands = []

  if (bpsValueInPence <= paymentBandThresholds.band1) {
    paymentBands.push({ band: 1, value: bpsValueInPence })
    return paymentBands
  }

  if (bpsValueInPence <= paymentBandThresholds.band2) {
    paymentBands.push({ band: 1, value: paymentBandThresholds.band1 })
    paymentBands.push({ band: 2, value: (bpsValueInPence - paymentBandThresholds.band1) })
    return paymentBands
  }

  if (bpsValueInPence <= paymentBandThresholds.band3) {
    paymentBands.push({ band: 1, value: paymentBandThresholds.band1 })
    paymentBands.push({ band: 2, value: paymentBandThresholds.band2 - paymentBandThresholds.band1 })
    paymentBands.push({ band: 3, value: (bpsValueInPence - paymentBandThresholds.band2) })
    return paymentBands
  }

  if (bpsValueInPence > paymentBandThresholds.band3) {
    paymentBands.push({ band: 1, value: paymentBandThresholds.band1 })
    paymentBands.push({ band: 2, value: paymentBandThresholds.band2 - paymentBandThresholds.band1 })
    paymentBands.push({ band: 3, value: paymentBandThresholds.band3 - paymentBandThresholds.band2 })
    paymentBands.push({ band: 4, value: (bpsValueInPence - paymentBandThresholds.band3) })
    return paymentBands
  }
}
