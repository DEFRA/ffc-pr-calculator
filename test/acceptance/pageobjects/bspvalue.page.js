class BspValuePage extends Page {
  get homeLink () { return $('a.govuk-breadcrumbs__link') }
  get serviceLink () { return $('a.govuk-link') }
  get licenseLink () { return $('//span/a') }
  get titleHeader () { return $('h1.govuk-panel__title') }

  verifyTitlePageText () {
    this.titleHeader.getText()
  }
}

export default new BspValuePage()
