const getPaymentBands = require('./get-payment-band')
const calculateBand = require('./calculate-band')
const calculateOverall = require('./calculate-overall')
const { convertStringToPence } = require('./convert-currency')

function calculate (bpsValue) {
  const bpsValueInPence = convertStringToPence(bpsValue.toString())
  const paymentBands = getPaymentBands(bpsValueInPence)
  const bandResult = paymentBands.map(calculateBand)
  return {
    overallResult: calculateOverall(bpsValueInPence, bandResult),
    bandResult
  }
}

module.exports = calculate
