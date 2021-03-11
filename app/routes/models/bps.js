function ViewModel (value, error) {
  // Constructor function to create logic dependent nunjucks page
  this.model = {
    label: {
      text: 'Enter a starting payment amount:',
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
    autocomplete: 'off',
    value
  }

  // If error is passed to model then this error property is added to the model
  if (error) {
    this.model.errorMessage = {
      text: 'Your BPS value must be greater than £0 and less than £1,000,000,000'
    }
  }
}

module.exports = ViewModel
