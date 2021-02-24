const getPaymentBands = require('./get-payment-band')
const calculateBand = require('./calculate-band')
const calculateOverall = require('./calculate-overall')

function calculate (bpsValue) {
  const paymentBands = getPaymentBands(bpsValue)
  const bandResult = paymentBands.map(calculateBand)
  return {
    overallResult: calculateOverall(bpsValue, bandResult),
    bandResult
  }
}

module.exports = calculate
