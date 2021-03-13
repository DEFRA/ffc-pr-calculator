function ViewModel (value, error) {
  // Constructor function to create logic dependent nunjucks page
  this.model = {
    classes: 'govuk-radios--inline',
    fieldset: {
      legend: {
        text: 'Starting payment amounts: Do you wish to enter a single value, or separate values, for the scheme years 2021 to 2024?',
        isPageHeading: false,
        classes: 'govuk-fieldset__legend--m'
      }
    },
    hint: {
      text: ''
    },
    items: [
      {
        value: 'multiple',
        text: 'Yes'
      },
      {
        value: 'single',
        text: 'No'
      }
    ],
    id: 'inputType',
    name: 'inputType'
  }

  // If error is passed to model then this error property is added to the model
  if (error) {
    this.model.errorMessage = {
      text: 'Please select whether you want to enter a single value.'
    }
  }
}

module.exports = ViewModel
