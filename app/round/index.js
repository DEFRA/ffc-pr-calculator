function round (value, precision, up = true) {
  return up ? roundUp(value, precision) : roundDown(value, precision)
}

function roundUp (value, precision) {
  // binary floating point representation can result in values incorrectly being rounded down instead of up
  // the approach to avoid that issue applied here is to represent numbers using exponentail notation
  // then round the exponential value, add the negative exponential of the precision
  // and finally convert the exponential value to a number
  const expValue = Number(`${value}e${precision}`)
  const negativeExpPrecision = `e-${precision}`
  const expResult = Math.round(expValue) + negativeExpPrecision
  return Number(expResult)
}

function roundDown (value, precision) {
  return Math.round(value * 100) / 100
}

module.exports = round
