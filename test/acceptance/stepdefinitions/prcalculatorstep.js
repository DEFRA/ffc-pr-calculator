import {Given, When, Then, And} from 'cucumber';

import homePage from '../pageobject/Home.page';
import bspPage from '../pageobject/Bsp.page';
import bspvaluePage from '../pageobject/Bspvalue.page';
import { expect } from 'chai';


import homePage from '../pageobject/Home.page'
import bspPage from '../pageobject/Bsp.page'
// import bspvaluePage from '../pageobject/Bspvalue.page'


import checkContainsAnyText from '../support/check/checkContainsAnyText'
import checkIsEmpty from '../support/check/checkIsEmpty'
import checkContainsText from '../support/check/checkContainsText'
import checkCookieContent from '../support/check/checkCookieContent'
import checkCookieExists from '../support/check/checkCookieExists'
import checkDimension from '../support/check/checkDimension'
import checkElementExists from '../support/check/checkElementExists'
import checkEqualsText from '../support/check/checkEqualsText'
import checkModal from '../support/check/checkModal'
import checkOffset from '../support/check/checkOffset'
import checkProperty from '../support/check/checkProperty'
import checkSelected from '../support/check/checkSelected'
import checkTitle from '../support/check/checkTitle'
import checkUrl from '../support/check/checkURL'
import closeAllButFirstTab from '../support/action/closeAllButFirstTab'
import compareText from '../support/check/compareText'
import isEnabled from '../support/check/isEnabled'
import isDisplayed from '../support/check/isDisplayed'
import openWebsite from '../support/action/openWebsite'
import setWindowSize from '../support/action/setWindowSize'
//import { expect } from 'chai';

// Given(
//   /^I open the (url|site) "([^"]*)?"$/,
//   openWebsite
// )


Given('I am on the Progressive Reductions Calculator home page', async () => {
  homePage.open();
});


When(/^I click on start new calculator button$/, async () => {

    homePage.start();
});

When(/^I enter BPS payment value (.*)$/, async (amount) => {    
    //(await browser.$("#bpsValue")).setValue("500");
    bspPage.enterBpsValue(amount);
});

 When(/^I click calculate my payment$/, async () => {
     //(await browser.$("#bpsValue")).setValue("500");
    bspPage.calculateBpsValue();
 });

 
 Then(/^I should see (.*)$/, async (message) => {
   
     //expect( bspvaluePage.verifyTitlePage().to.equal(message));     // toHaveTextContaining(message);  expect(2).to.equal(2);
    //console.log(bspvaluePage.titleHeader);
    //assert.equal(bspvaluePage.titleHeader, message );
   // expect(message).to.include(bspvaluePage.titleHeader.getText());
     //expect(pageHeader).toExist();
     //expect(bspvaluePage.getPageHeader().to.equal(message));

     //expect(bspvaluePage.titleHeader).toHa
      //expect(bspvaluePage.getPageHeader()).toBeExisting(message);
      //expect(bspvaluePage.getPageHeader()).toHaveTextContaining(message);       add value
     // expect(bspvaluePage.getPageHeader()).toHaveText(message);
     bspvaluePage.getPageHeader(message)

     
});


Then(/^I see the (.*)$/, async (errormessage) => {
   
    //expect( bspvaluePage.verifyTitlePage().to.equal(errormessage)); 
    bspPage.getErrorTextMessage(errormessage)  
  
});


When(/^I click home link on bps value page$/, async () => {
     bspvaluePage.clickOnHomeLink();
});


When(/^I click service link on bps value page$/, async () => {
    bspvaluePage.clickOnServiceLink();
});

When(/^I click home link on bps page$/, async () => {
    bspvaluePage.clickOnHomeLink();
});

       
Then(/^I should successfully return to homepage and (.*) is displayed$/, async (usefulLinks) => {
   
    homePage.getUsefulLinkText(usefulLinks);   
});


When(/^I click on all the (.*) on bps value page$/, async (links) => {    
    //(await browser.$("#bpsValue")).setValue("500");
    bspvaluePage.clickOnLinks(links)
});

//Then   I should return to <expectedpageheader>
Then(/^I should return to (.*)$/, async (expectedPageHeader) => {
      
   // expect( bspvaluePage.verifyTitlePage().to.equal(expectedPageHeader)); 
   homePage.getUsefulLinkText(expectedPageHeader); 
   bspvaluePage.getPageHeader(expectedPageHeader)
   
});

