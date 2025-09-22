const START_YEAR = 2024
const NUMBER_OF_YEARS = 4 // e.g., 2024, 2025, 2026, 2027

const schemeYears = Array.from({ length: NUMBER_OF_YEARS }, (_, i) => START_YEAR + i)

module.exports = {
  schemeYears
}
