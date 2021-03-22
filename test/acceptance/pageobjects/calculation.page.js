import Page from './page'

class CalculationPage extends Page {
  /**
  * define elements
  */

  get header1 () { return $('h1.govuk-panel__title') }         


  /**
     * define or overwrite page methods
     */
  open () {
    super.open('')
    browser.pause(3000)
  }
  

  selectNoOption () {
    // this.waitForloginPageToLoad();
    this.noRadioButton.click()  
  }

  getHeaderText () {
     this.header1.gettext()
  }
}

export default new CalculationPage()
