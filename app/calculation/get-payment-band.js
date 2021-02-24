const round = require('../round')
const paymentBandThresholds = require('./payment-band-thresholds')

module.exports = function getPaymentBands (bpsValue) {
  const paymentBands = []

  if (bpsValue <= paymentBandThresholds.band1) {
    paymentBands.push({ band: 1, value: bpsValue })
    return paymentBands
  }

  if (bpsValue <= paymentBandThresholds.band2) {
    paymentBands.push({ band: 1, value: paymentBandThresholds.band1 })
    paymentBands.push({ band: 2, value: round(bpsValue - paymentBandThresholds.band1, 2) })
    return paymentBands
  }

  if (bpsValue <= paymentBandThresholds.band3) {
    paymentBands.push({ band: 1, value: paymentBandThresholds.band1 })
    paymentBands.push({ band: 2, value: paymentBandThresholds.band2 - paymentBandThresholds.band1 })
    paymentBands.push({ band: 3, value: round(bpsValue - paymentBandThresholds.band2, 2) })
    return paymentBands
  }

  if (bpsValue > paymentBandThresholds.band3) {
    paymentBands.push({ band: 1, value: paymentBandThresholds.band1 })
    paymentBands.push({ band: 2, value: paymentBandThresholds.band2 - paymentBandThresholds.band1 })
    paymentBands.push({ band: 3, value: paymentBandThresholds.band3 - paymentBandThresholds.band2 })
    paymentBands.push({ band: 4, value: round(bpsValue - paymentBandThresholds.band3, 2) })
    return paymentBands
  }
}
