import Page from './page'

class HomePage extends Page {
  /**
  * define elements
  */
//   get usernameInput () { return $('//*[@name="username"]') }
//   get passwordInput () { return $('//*[@name="password"]') }
//   get loginButton () { return $('//button[contains(., "Login")]') }
//   get headerImage () { return $('//img[@alt="Login"]') }
//   get cookiesGotIt () { return $('//button[contains(., "Got it!")]') }
//   get usertrackConsent () { return $('//button[contains(., "Acc")]') }
  // get startNewClaim()    { return $('//button[contains(., "Start new claim")]');}

  
  get supportLink () { return $('=Agricultural Transition Plan 2021 to 2024'); } 
  get farmingLink () { return $('=Farming is changing'); }
  get cookiesLink () { return $('=Cookies'); }
  get openGovtLink () { return $('=Open Government Licence v3.0'); }
  get startNewCal () { return $('//main/div/div/a') }

  /**
     * define or overwrite page methods
     */
  open () {
    super.open('')
    browser.pause(3000)
  }
  /**
     * your page specific methods
     */

//   waitForloginPageToLoad () {
//     if (!this.headerImage.isDisplayed()) {
//       this.headerImage.waitForDisplayed(10000)
//     }
//   }

//   login (username, password) {
//     // this.waitForloginPageToLoad();
//     this.usernameInput.setValue(username)
//     this.passwordInput.setValue(password)
//     this.usertrackConsent.click()
//     this.cookiesGotIt.click()
//     this.loginButton.click()
//   }

  startNewCalculation () {
    this.startNewCal.click()
  }

  clickOnprogressiveReductionSupport() {
    this.supportLink.click()
  }

  ClickOnfarmingIsChanging() {
    this.farmingLink.click()
  }

  clickOncookiesLink() {
    this.cookiesLink.click()
  }

  ClickOpenGovtLicense() {
    this.openGovtLink.click()
  }


}

export default new HomePage()
