const getPaymentBands = require('./get-payment-band')
const calculateBand = require('./calculate-band')
const calculateOverall = require('./calculate-overall')
const { convertStringToPence } = require('./convert-currency')

function calculate (bpsValue) {
  const bpsValueInPence = convertStringToPence(bpsValue.toString())
  const paymentBands = getPaymentBands(bpsValueInPence)
  const bandResult = paymentBands.map(calculateBand)
  return bandResult
}

function calculateSingle (bpsValue) {
  const bandResult = calculate (bpsValue)
  return {
    overallResult: calculateOverall(convertStringToPence(bpsValue.toString()), bandResult),
    bandResult
  }
}

function setEmpty(schemeYear) {
  return {
    schemeYear,
    bpsValue: 0,
    rate: 0,
    reductionInPence: 0,
    reduction: 0,
    paymentInPence: 0,
    payment: 0
  }
}

function sum(array) {
  var total = 0
  for (var i = 0; i < array.length; i++) !isNaN(array[i].payment) ? total += array[i].payment : ''
  return total
}

function calculateMultiple (bps2021Value, bps2022Value, bps2023Value, bps2024Value) {

  const bps2021Results = calculate (bps2021Value)
  const bps2022Results = calculate (bps2022Value)
  const bps2023Results = calculate (bps2023Value)
  const bps2024Results = calculate (bps2024Value)

  const bandResult = []

  for (i = 0; i < 4; i++){
    const bandData = {band: i + 1, result: [] }
    bps2021Results.length > i ? bandData.result.push(bps2021Results[i].result[0]) : bandData.result.push(setEmpty(2021))
    bps2022Results.length > i ? bandData.result.push(bps2022Results[i].result[1]) : bandData.result.push(setEmpty(2022))
    bps2023Results.length > i ? bandData.result.push(bps2023Results[i].result[2]) : bandData.result.push(setEmpty(2023))
    bps2024Results.length > i ? bandData.result.push(bps2024Results[i].result[3]) : bandData.result.push(setEmpty(2024))
    bandData.result.reduce((total, data) => total + data.payment, 0) > 0 ? bandResult.push(bandData) : ''
  }


  const overallResult = []

  overallResult.push(calculateOverall(convertStringToPence(bps2021Value.toString()), bandResult)[0])
  overallResult.push(calculateOverall(convertStringToPence(bps2022Value.toString()), bandResult)[1])
  overallResult.push(calculateOverall(convertStringToPence(bps2023Value.toString()), bandResult)[2])
  overallResult.push(calculateOverall(convertStringToPence(bps2024Value.toString()), bandResult)[3])

  return {
    overallResult,
    bandResult
  }
}

module.exports = { calculateSingle, calculateMultiple }
