function ViewModel (value, error) {
  // Constructor function to create logic dependent nunjucks page
  this.model = {
    classes: 'govuk-radios--inline',
    fieldset: {
      legend: {
        text: 'Do you wish to enter a single payment amount?',
        isPageHeading: true,
        classes: 'govuk-fieldset__legend--l'
      }
    },
    hint: {
      text: 'A single value assumes your claim value won\'t change between 2021 and 2024'
    },
    items: [
      {
        value: 'single',
        text: 'Yes'
      },
      {
        value: 'multiple',
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
