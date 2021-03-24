import Page from './page'

class CalculationPage extends Page {
  // define elements
  get header1 () { return $('h1.govuk-panel__title') }
  get cookiesLink () { return $('=Cookies') }
  get openGovtLink () { return $('=Open Government Licence v3.0') }
  get accessStatementLink () { return $('=Accessibility statement') }
  get copyRightLink () { return $('= © Crown copyright') }

  open () {
    super.open('')
    browser.pause(3000)
  }

  getHeaderText () {
    this.header1.gettext()
  }
}

export default new CalculationPage()
