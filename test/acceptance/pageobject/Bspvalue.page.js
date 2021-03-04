<<<<<<< HEAD
import Page from './page';
import { expect } from 'chai';

class bspvaluepage extends Page{ 
    
    get homeLink () { return $('a.govuk-breadcrumbs__link'); }
    get serviceLink () { return $('a.govuk-link'); }
    get licenseLink () {return $('//span/a');}
    get pageHeader () {return $('h1.govuk-panel__title')}
    get linkName () { return $('links'); }
    
        
    async waitForloginPageToLoad ()
     {
         if (!this.titleHeader.isDisplayed()) {
        this.titleHeader.waitForDisplayed(10000)
       }
     }

     async getPageHeader(message) {
          (await this.pageHeader).getText();
          expect(pageHeader).to.equal(message);
           
      }


     async verifyTitlePage() {
         await (await this.titleHeader.getText());
     }
     
     async clickOnHomeLink() {
        await (await this.homeLink.click());
     }

    async clickOnServiceLink() {
      await (await this.serviceLink.click());
    }

    async clickOnLinks(links) {
        
        if (links == home)
        {
           (this.homeLink.click(links));
        }
        else if (links == service)
        {
           (this.serviceLink.click(links));
        }
        else if (links == license)
        {
           (this.licenseLink.click(links));
        }       
    }
    
    open () {
        super.open('http://host.docker.internal:3000')
        //browser.pause(3000)
      }
    
 }   

export default new bspvaluepage();
=======
class Bspvaluepage {
  /**
     * define selectors using getter methods
     */
  get homeLink () { return $('a.govuk-breadcrumbs__link') }
  get serviceLink () { return $('a.govuk-link') }
  get licenseLink () { return $('//span/a') }
  get titleHeader () { return $('h1.govuk-panel__title') }

  verifyTitlePage () {
    this.titleHeader.getText()
  }
}

export default new Bspvaluepage()
>>>>>>> c2c14e3b1f6d3af3d62e9b37998b0cb73adbf609
