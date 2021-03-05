const getPaymentBands = require('./get-payment-band')
const calculateBand = require('./calculate-band')
const calculateOverall = require('./calculate-overall')
const { convertStringToPence } = require('./convert-currency')
const schemeYears = require('./scheme-years')

function transformResults (bandResults) {
  return Object.values(bandResults.flat().reduce((r, { band, result }) => {
    if (!r[band]) {
      r[band] = {
        band: band,
        result: []
      }
    }
    result.map((bandResult) => {
      r[band].result.push(bandResult)
      return bandResult
    })
    return r
  }, {}))
}

function calculate (schemeYearValues) {
  const bandResults = []

  schemeYearValues.forEach(schemeYearValue => {
    const bpsValueInPence = convertStringToPence(schemeYearValue.bpsValue.toString())
    const paymentBands = getPaymentBands(schemeYearValue.schemeYear, bpsValueInPence)
    const bandResult = paymentBands.map(calculateBand)
    bandResults.push(bandResult.flat())
  })

  return transformResults(bandResults)
}

function calculateFromValue (bpsValue) {
  const schemeYearValues = schemeYears.map(schemeYear => ({ schemeYear, bpsValue }))

  const bandResult = calculate(schemeYearValues)

  return {
    overallResult: calculateOverall(schemeYearValues, bandResult),
    bandResult
  }
}

function calculateFromSchemeYears (schemeYearValues) {
  const bandResult = calculate(schemeYearValues)
  return {
    overallResult: calculateOverall(schemeYearValues, bandResult),
    bandResult
  }
}

module.exports = { calculateFromValue, calculateFromSchemeYears }
