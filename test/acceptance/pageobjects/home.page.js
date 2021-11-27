import Page from './page'

class HomePage extends Page {
  // define elements
  get supportLink () { return $('=Agricultural Transition Plan 2021 to 2024') }
  get farmingLink () { return $('=Farming is changing') }
  get cookiesLink () { return $('=Cookies') }
  get openGovtLink () { return $('=Open Government Licence v3.0') }
  get accessStatementLink () { return $('=Accessibility statement') }
  get copyRightLink () { return $('= © Crown copyright') }
  get startNewCal () { return $('//main/div/div/a') }

  // define or overwrite page methods

  open () {
    super.open('')
    browser.pause(3000)
  }

  // your page specific methods

  startNewCalculation () {
    this.startNewCal.click()
  }

  clickOnprogressiveReductionSupport () {
    this.supportLink.click()
  }

  ClickOnfarmingIsChanging () {
    this.farmingLink.click()
  }

  clickOncookiesLink () {
    this.cookiesLink.click()
  }

  clickOpenGovtLicense () {
    this.openGovtLink.click()
  }

  clickOnAccessibilityLink () {
    this.accessStatementLink.click()
  }

  clickOnCopyRightLink () {
    this.copyRightLink.click()
  }
}

export default new HomePage()
