function ViewModel (value, error) {
  // Constructor function to create logic dependent nunjucks page
  this.model = {
    label: {
      text: 'Enter your delinked reference amount',
      classes: 'govuk-!-display-none',
      isPageHeading: true
    },
    hint: {
      text: 'The number you enter should not include commas. For example, enter £20,000 as 20000.'
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

