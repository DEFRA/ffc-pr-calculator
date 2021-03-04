import Page from './page'

/**
 * sub page containing specific selectors and methods for a specific page
 */
class BSPPage extends Page {
/**
 * define selectors using getter methods
 */
  get inputBPSValue () { return $('#bpsValue') }
  get calMyPaymentBtn () { return $('button.govuk-button') }
  get homeLink () { return $('button.govuk-button') }

  async enterBpsValue (amount) {
    await (await this.inputBPSValue).setValue(amount)
  }

  async calculateBpsValue () {
    this.calMyPaymentBtn.click()
  }
}

<<<<<<< HEAD
export default new BSPPage();



=======
export default new BSPPage()
>>>>>>> c2c14e3b1f6d3af3d62e9b37998b0cb73adbf609
