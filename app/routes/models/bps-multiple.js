function createInput (paymentBand, error, value) {
  return {
    label: {
      text: `Payment amount for ${paymentBand}`
    },
    prefix: {
      text: '£'
    },
    spellcheck: false,
    classes: 'govuk-input--width-10',
    id: `bps${paymentBand}Value`,
    name: `bps${paymentBand}Value`,
    autocomplete: 'off',
    value
  }
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
  this.model = {
    band2021: createInput('2021', error, payload?.bps2021Value),
    band2022: createInput('2022', error, payload?.bps2022Value),
    band2023: createInput('2023', error, payload?.bps2023Value),
    band2024: createInput('2024', error, payload?.bps2024Value),
    errors: createErrorSummary(error?.details)
  }
}
