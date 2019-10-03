import { When, Then, Given, setDefaultTimeout } from "cucumber";
import {VolHomePage } from "../page_objects/vol_objects/vol-home.page";
import {VolLoginPage} from "../page_objects/vol_objects/vol-login.page";
import {VolPartsEntryPage} from "../page_objects/vol_objects/vol-parts-entry.page";
import { browser, ExpectedConditions, ElementArrayFinder, ElementFinder } from "protractor";

const volHomePage: VolHomePage = new VolHomePage();
const volLoginPage: VolLoginPage = new VolLoginPage();
const volPartsEntryPage: VolPartsEntryPage = new VolPartsEntryPage();

const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;


Given('a user logs in with username {string} and password {string}', function (username, password) {
  // Write code here that turns the phrase above into concrete actions
  volLoginPage.usernameField.sendKeys(username);
  volLoginPage.passwordField.sendKeys(password);
  return volLoginPage.loginButton.click();
});

When('we select a customer called {string}', async function (customerName) {
  
  browser.wait(ExpectedConditions.elementToBeClickable(volHomePage.customerContactButton));
  volHomePage.customerContactButton.click();

  browser.wait(ExpectedConditions.visibilityOf(volPartsEntryPage.nameSearchField));
  volPartsEntryPage.nameSearchField.sendKeys(customerName);

  browser.wait(ExpectedConditions.elementToBeClickable(volPartsEntryPage.customerSearchButton));
  volPartsEntryPage.customerSearchButton.click();

  let waitForResults = (searchTerm: string) => {
    return volPartsEntryPage.findCustomerInTable(searchTerm).then((results) => {
      return results.length > 0;
    })
  }

  browser.wait(waitForResults(customerName));
  volPartsEntryPage.findCustomerInTable(customerName).first().click();

  browser.wait(ExpectedConditions.elementToBeClickable(volPartsEntryPage.selectCustomerButton));
  return volPartsEntryPage.selectCustomerButton.click();

});

Then('we see what vehicles they own', function () {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});