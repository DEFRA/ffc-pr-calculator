
import Page from './page'

class ValuePage extends Page {
  
  // define elements
  get valueField () { return $('#value') }
  get backLink () { return $('#back') }
  get nextButton () { return $('//button') } 
  get errorValue (){ return $('value-error')}  
  get calProReductnLink(){ return $('Calculate my progressive reductions')}    
  get govUKLink(){ return $('GOV.UK')}    
  get cookiesLink () { return $('=Cookies'); }
  get openGovtLink () { return $('=Open Government Licence v3.0'); }
  get accessStatementLink () { return $('=Accessibility statement'); }
  get copyRightLink () { return $('= © Crown copyright'); }
  
  
  open () {
    super.open('')
    browser.pause(3000)
  }

  entervalue(value) {
    this.valueField.setValue(value); 
  }

  clickBackLink() {
    this.backLink.click();
  }

  continue() {
  this.nextButton.click();
  }
  
  getErrorMessage(){
    
  }

  clickOnLink(){
    this.calProReductnLink.click();
  }
}

export default new ValuePage()

