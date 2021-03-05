const getPaymentBands = require('./get-payment-band')
const calculateBand = require('./calculate-band')
const calculateOverall = require('./calculate-overall')
const { convertStringToPence } = require('./convert-currency')
const schemeYears = require('./scheme-years')

function transformResults (bandResults) {
  // transform nested array into json object grouped by band.
  return Object.values(bandResults.flat().reduce((groupedBands, { band, result }) => {
    // create new band obect if doesn't already exist
    if (!groupedBands[band]) {
      groupedBands[band] = {
        band: band,
        result: []
      }
    }
    // add results to the band group
    result.map((bandResult) => {
      groupedBands[band].result.push(bandResult)
      return bandResult
    })
    return groupedBands
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
