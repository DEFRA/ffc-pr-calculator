import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class BSPPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputBPSValue () { return $('#bpsValue') }
    get calMyPaymentBtn () { return $('button.govuk-button') }
    get homeLink () {return $('button.govuk-button')}

    async enterBpsValue(amount) {
        await (await this.inputBPSValue).setValue(amount);
                     
    }

    async calculateBpsValue() {
        this.calMyPaymentBtn.click();
    }


    
}

export default new BSPPage();



