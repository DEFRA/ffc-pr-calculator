
<<<<<<< HEAD
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
=======
class Homepage {
  get startNewCalBtn () { return $('//main/div/div/a') }
  get homeLink () { return $('a.govuk-breadcrumbs__link') }

  // start() {
  //     this.startNewCalBtn.click();
  // }

  open () {
    browser.url('http://localhost:3000/')
  }

  async start () {
    await (await this.startNewCalBtn).click()
  }
}

export default new Homepage()
>>>>>>> c2c14e3b1f6d3af3d62e9b37998b0cb73adbf609
