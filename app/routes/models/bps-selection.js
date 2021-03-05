function ViewModel (value, error) {
  // Constructor function to create logic dependent nunjucks page
  this.model = {
    classes: 'govuk-radios--inline',
    fieldset: {
      legend: {
        text: 'Will your BPS claim change in future years?',
        isPageHeading: true,
        classes: 'govuk-fieldset__legend--l'
      }
    },
    hint: {
      text: 'For example, if you will claim on more, or less, land entitlements.'
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
    id: 'bpsSelection',
    name: 'bpsSelection'
  }

  // If error is passed to model then this error property is added to the model
  if (error) {
    this.model.errorMessage = {
      text: 'Please select if your BPS claim change in future years.'
    }
  }
}

module.exports = ViewModel
