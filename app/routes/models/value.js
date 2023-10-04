function ViewModel (value, error) {
  // Constructor function to create logic dependent nunjucks page
  this.model = {
    // label: {
    //   text: 'Enter your BPS starting payment amount',
    //   classes: 'govuk-label--m',
    //   isPageHeading: true
    // },
    // hint: {
    //   text: `This calculator will estimate your payment for the 2023 scheme year based on the starting payment amount you enter.
    //   You will also see estimated payments for the 2021 and 2022 scheme years when you input your starting amount.
    //   You should use the 'Sub total' in the 'Claim summary box' of your most recent BPS Claim Statement as the starting payment amount`
    // },
    prefix: {
      text: '£'
    },
    spellcheck: false,
    classes: 'govuk-input--width-10',
    id: 'value',
    name: 'value',
    autocomplete: 'off',
    value
  }

  // If error is passed to model then this error property is added to the model
  if (error) {
    this.model.errorMessage = {
      text: error.message
    }
  }
}

module.exports = ViewModel
