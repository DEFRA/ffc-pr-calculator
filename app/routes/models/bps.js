function ViewModel (value, error) {
  // Constructor function to create logic dependent nunjucks page
  this.model = {
    label: {
      text: 'What was the value of your BPS 2020 payment?',
      classes: 'govuk-label--l',
      isPageHeading: true
    },
    prefix: {
      text: '£'
    },
    spellcheck: false,
    classes: 'govuk-input--width-10',
    id: 'bpsValue',
    name: 'bpsValue',
    value
  }

  // If error is passed to model then this error property is added to the model
  if (error) {
    this.model.errorMessage = {
      text: 'Your BPS 2020 value must be greater than zero'
    }
  }
}

module.exports = ViewModel
