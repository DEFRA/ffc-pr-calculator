const getPaymentBands = require('./get-payment-band')
const calculateBand = require('./calculate-band')

function calculate (bpsValue) {
  const paymentBands = getPaymentBands(bpsValue)
  return {
    result: paymentBands.map(calculateBand)
  }
}

module.exports = calculate
