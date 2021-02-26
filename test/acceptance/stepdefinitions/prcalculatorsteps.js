import { Given, When, Then } from 'cucumber'

import HomePage from '../pageobjects/home.page'
import BspPage from '../pageobjects/bsp.page'
import BspValuePage from '../pageobjects/bspvalue.page'

const pages = {
  home: HomePage
}

Given(/^that I am on the Progressive Reductions Calculator (\w+) page$/, async (page) => {
  await pages[page].open()
})

When(/^I click on start new calculator button$/, async () => {
  HomePage.startNewCalBtn()
})

When(/^I enter BPS payment value (.*)$/, async (amount) => {
  BspPage.enterBpsValue(amount)
})

When(/^I click calculate my payment $/, async () => {
  BspPage.calculateBpsValue()
})

Then(/^I should see (.*)$/, async (message) => {
  expect(BspValuePage.verifyTitlePageText).toHaveTextContaining(message)
})
