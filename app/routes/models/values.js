function createInput (paymentBand, error, value) {
  const schemeYearInput = {
    label: {
      text: `${paymentBand}`
    },
    prefix: {
      text: '£'
    },
    spellcheck: false,
    classes: 'govuk-input--width-10',
    id: `value${paymentBand}`,
    name: `value${paymentBand}`,
    autocomplete: 'off',
    value
  }

  const checkIfErrorMessage = error?.errorList.find((errorMessage) => errorMessage.text.indexOf(paymentBand) >= 0)

  if (checkIfErrorMessage) {
    schemeYearInput.errorMessage = { text: checkIfErrorMessage.text }
  }

  return schemeYearInput
}

function createErrorSummary (errorDetails) {
  if (errorDetails) {
    const errorList = errorDetails.map((error) => ({ text: error.message, href: `#${error.path}` }))
    return {
      titleText: 'There is a problem',
      errorList
    }
  }
}

module.exports = function ViewModel (payload, error) {
  const errors = createErrorSummary(error?.details)

  this.model = {
    band2021: createInput('2021', errors, payload?.value2021),
    band2022: createInput('2022', errors, payload?.value2022),
    band2023: createInput('2023', errors, payload?.value2023),
    band2024: createInput('2024', errors, payload?.value2024),
    errors
  }
}
