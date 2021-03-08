import Page from './page';
import { expect } from 'chai';

class bspPage extends Page {

    get inputBPSValue () { return $('#bpsValue'); }
    get calMyPaymentBtn () { return $('button.govuk-button'); }
    get homeLink () {return $('button.govuk-button');}
    get errorTextMessage () {return $('span#bpsValue-error.govuk-error-message');}


    async enterBpsValue(amount) {
        await (await this.inputBPSValue).setValue(amount);                    
    }

    async calculateBpsValue() {
        await (await this.calMyPaymentBtn).click();
    }

    async getErrorTextMessage(errormessage) {
        //(await this.errorTextMessage).getText();
        expect(errorTextMessage).to.equal(errormessage);
        expect(errorTextMessage).toHaveText(errormessage);
    }

    async clickOnHomeLink() {
        await (await this.homeLink.click());
    }

    open () {
        super.open('calculation?bpsValue=500')
      }

      open () {
        super.open('http://host.docker.internal:3000')
        //browser.pause(3000)
      }
}

export default new bspPage();



 
  



