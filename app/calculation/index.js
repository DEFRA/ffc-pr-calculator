const getPaymentBands = require('./get-payment-band')
const calculateBand = require('./calculate-band')
const calculateOverall = require('./calculate-overall')
const { convertStringToPence } = require('./convert-currency')
const schemeYears = require('./scheme-years')

function calculate (value) {
  const schemeYearValues = !isNaN(value)
    ? schemeYears.map(schemeYear => ({ schemeYear, value }))
    : [{ schemeYear: 2021, value: value.value2021 || 0 },
        { schemeYear: 2022, value: value.value2022 || 0 },
        { schemeYear: 2023, value: value.value2023 || 0 },
        { schemeYear: 2024, value: value.value2024 || 0 }]

  const bandResult = calculateBands(schemeYearValues)

  return {
    overallResult: calculateOverall(schemeYearValues, bandResult),
    bandResult
  }
}

function calculateBands (schemeYearValues) {
  const bandResults = []

  schemeYearValues.forEach(schemeYearValue => {
    const valueInPence = convertStringToPence(schemeYearValue.value.toString())
    const paymentBands = getPaymentBands(schemeYearValue.schemeYear, valueInPence)
    const bandResult = paymentBands.map(calculateBand)
    bandResults.push(bandResult.flat())
  })

  return transformResults(bandResults)
}

function transformResults (bandResults) {
  // transform nested array into json object grouped by band.
  return Object.values(bandResults.flat().reduce((groupedBands, { band, result }) => {
    // create new band object if doesn't already exist
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

module.exports = calculate
