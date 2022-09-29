function ViewModel (value, error) {
  // Constructor function to create logic dependent nunjucks page
  this.model = {
    label: {
      text: 'What is your starting payment amount?',
      classes: 'govuk-label--l',
      isPageHeading: true
    },
    hint: {
      text: "Your starting payment amount is the total BPS payment you received in 2020 (after all reductions and penalties) if you're claiming for a similar area of land in 2022 and 2023."
    },
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
