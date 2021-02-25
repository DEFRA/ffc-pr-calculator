

class Homepage  {

    get startNewCalBtn() { return $('//main/div/div/a') }
    get homeLink() { return $('a.govuk-breadcrumbs__link') }
    

    // start() {
    //     this.startNewCalBtn.click();
    // }

    open () {
        browser.url("http://localhost:3000/");
    }

    async start () {
        await (await this.startNewCalBtn).click();
    }

}

export default new Homepage();