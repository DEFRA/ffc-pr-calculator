
import Page from './page'

class ValuePage extends Page {
  /**
  * define elements
  */

  get valueField () { return $('#value') }
  get valueField21 () { return $('#value2021') }
  get valueField22 () { return $('#value2022') }
  get valueField23 () { return $('#value2023') }
  get valueField24 () { return $('#value2024') }

  /**
     * define or overwrite page methods
     */
  open () {
    super.open('')
    browser.pause(3000)
  }

   entervalue(value) {
    this.valueField.setValue(value); 
  }

  entervalue21(value) {
    this.valueField21.setValue(value); 
  }

  entervalue22(value) {
    this.valueField22.setValue(value); 
  }

  entervalue23(value) {
    this.valueField23.setValue(value); 
  }

  entervalue24(value) {
    this.valueField24.setValue(value); 
  }

  // continue() {
  //   this.nextButton.waitForDisplayed(10000)
  //   return this.nextButton.isDisplayed()
  // }
  
}

export default new ValuePage()

