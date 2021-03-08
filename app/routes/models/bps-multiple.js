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

module.exports = function ViewModel (payload, error) {
  const errorMessage = { text: '' }

  // If error is passed to model then this error property is added to the model
  if (error) {
    errorMessage.text = 'Your BPS value must be greater than £0 and less than £1,000,000,000'
  }

  this.model = {
    band2021: createInput('2021', error, payload?.bps2021Value),
    band2022: createInput('2022', error, payload?.bps2022Value),
    band2023: createInput('2023', error, payload?.bps2023Value),
    band2024: createInput('2024', error, payload?.bps2024Value),
    errorMessage
  }
}
