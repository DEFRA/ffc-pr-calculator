import {Given, When, Then, And} from 'cucumber';

import homePage from '../pageobject/Home.page';
import bspPage from '../pageobject/Bsp.page';
import bspvaluePage from '../pageobject/Bspvalue.page';
import { expect } from 'chai';




Given('I am on the Progressive Reductions Calculator home page', async () => {
  homePage.open();
});


When(/^I click on start new calculator button$/, async () => {

    homePage.start();
});

When(/^I enter BPS payment value (.*)$/, async (amount) => {    
    
    bspPage.enterBpsValue(amount);
});

 When(/^I click calculate my payment$/, async () => {
     
    bspPage.calculateBpsValue();
 });

 
 Then(/^I should see (.*)$/, async (message) => {   
     bspvaluePage.getPageHeader(message)     
});


Then(/^I see the (.*)$/, async (errormessage) => {
   
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
  
    bspvaluePage.clickOnLinks(links)
});


Then(/^I should return to (.*)$/, async (expectedPageHeader) => {
      
   // expect( bspvaluePage.verifyTitlePage().to.equal(expectedPageHeader)); 
   homePage.getUsefulLinkText(expectedPageHeader); 
   bspvaluePage.getPageHeader(expectedPageHeader)
   
});

