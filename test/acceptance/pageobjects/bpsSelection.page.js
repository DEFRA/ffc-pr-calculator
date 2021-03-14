import Page from './page'

class bpsSelectionPage extends Page {
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
  get noRadioButton () { return $('#bpsSelection-2') }
  get nextButton () { return $('button.govuk-button') }    //main[@id='main-content']/div/form/button
  //get nextButton () { return $('.govuk-button') } 

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

  SelectNoOption () {
    // this.waitForloginPageToLoad();
    this.noRadioButton.click()
    
  }

  waitForloginPageToLoad () {
    if (!this.nextButton.isDisplayed()) {
      this.nextButton.waitForDisplayed(10000)
    }
  }

  Continue () {
    this.nextButton.click()
  }


}

export default new bpsSelectionPage()
