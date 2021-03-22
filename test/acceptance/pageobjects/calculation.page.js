import Page from './page'

class CalculationPage extends Page {
  
  // define elements
  

  get header1 () { return $('h1.govuk-panel__title') }         

  open () {
    super.open('')
    browser.pause(3000)
  }

  getHeaderText () {
     this.header1.gettext()
  }
}

export default new CalculationPage()
