function ViewModel (value, error) {
  // Constructor function to create logic dependent nunjucks page
  this.model = {
    classes: "govuk-radios--inline",
    idPrefix: "changed-name",
    name: "changed-name",
    fieldset: {
      legend: {
        text: "Will your BPS claim change in future years?",
        isPageHeading: true,
        classes: "govuk-fieldset__legend--l"
      }
    },
    hint: {
      text: "e.g. you will claim on more, or less, land entitlements."
    },
    items: [
      {
        value: "multiple",
        text: "Yes"
      },
      {
        value: "single",
        text: "No"
      }
    ],
    id: 'bpsSelection',
    name: 'bpsSelection',
  }
}

module.exports = ViewModel
