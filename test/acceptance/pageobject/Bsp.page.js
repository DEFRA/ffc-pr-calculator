class Bsppage  {

    get inputBPSValue () { return $('#bpsValue') }
    get calMyPaymentBtn () { return $('button.govuk-button') }
    get homeLink () {return $('button.govuk-button')}
    
    

    async enterBpsValue() {
        await (await this.inputBPSValue).setValue('500');
                     
    }

    async calculateBpsValue() {
        this.calMyPaymentBtn.click();
    }

    // async start () {
    //     await (await this.startNewCalBtn).click();
    // }

}

export default new Bsppage();