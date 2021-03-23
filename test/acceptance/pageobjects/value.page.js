
import Page from './page'

class ValuePage extends Page {
  
  // define elements
  get valueField () { return $('#value') }
  get backLink () { return $('#back') }
  get nextButton () { return $('//button') } 
  get errorValue (){ return $('value-error')}  
  get calculateprreductn(){ return $('Calculate my progressive reductions')}    
  get calculateprreductn(){ return $('GOV.UK')}    
  
  
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
  
}

export default new ValuePage()

