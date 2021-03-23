
import Page from './page'

class InputTypePage extends Page {
  /**
  * define elements
  */

  get yesRadioButton () { return $('#inputType') }
  get noRadioButton () { return $('#inputType-2') }
  get nextButton () { return $('//button') }   
  get backLink () { return $('//div[2]/a') }          


  
  // define or overwrite page methods

  open () {
    super.open('')
    browser.pause(3000)
  }
  

  selectNoOption () {
    // this.waitForloginPageToLoad();
    this.noRadioButton.click()  
  }

  selectYesOption () {
     this.yesRadioButton()
  }

  continue() {
     this.nextButton.click();
  }

  clickBackLink() {
    this.backLink.click();
 }

}

export default new InputTypePage()
