
import Page from './page';

class homePage extends Page {
   
    get startNewCalBtn () { return $('//main/div/div/a'); }
    
    get subTitleHeader () { return $('h2#subsection-title.govuk-heading-m'); }

    async start () {
        await (await this.startNewCalBtn).click();
    }  

    async getUsefulLinkText(usefulLinkMessage) {
        expect(subTitleHeader).to.equal(usefulLinkMessage);       
    }

    open () {
       return super.open('bps');
    } 

}

export default new homePage();
