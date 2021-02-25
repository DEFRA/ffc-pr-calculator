import {Given, When, Then} from 'cucumber';

import homePage from '../pageobject/Home.page';
import bspPage from '../pageobject/Bsp.page';
import bspvaluePage from '../pageobject/Bspvalue.page';



Given(/^that I am on the Progressive Reductions Calculator home page$/, async () => {
    homePage.open();
});



When(/^I click on start new calculator button$/, async (page) => {
    //(await browser.$("//main/div/div/a")).click
    homePage.startNewCalBtn();
});

When(/^I enter BPS payment value 500$/, async (page) => {
    //(await browser.$("#bpsValue")).setValue("500");
    bspPage.enterBpsValue();
});


When(/^I click calculate my payment$/, async (page) => {
    //(await browser.$("#bpsValue")).setValue("500");
    bspPage.calculateBpsValue();
});


Then(/^I should see "Your progressive reductions have been estimated"$/, async (page) => {
    //(await browser.$("#bpsValue")).setValue("500");
   // bspPage.calculateBpsValue();
});

