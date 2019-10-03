import { When, Then, Given, setDefaultTimeout } from "cucumber";
import {VolHomePage } from "../page_objects/vol_objects/vol-home.page";
import {VolLoginPage} from "../page_objects/vol_objects/vol-login.page";
import {VolPartsEntryPage} from "../page_objects/vol_objects/vol-parts-entry.page";

const volHomePage: VolHomePage = new VolHomePage();
const volLoginPage: VolLoginPage = new VolLoginPage();
const volPartsEntryPage: VolPartsEntryPage = new VolPartsEntryPage();

const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;

setDefaultTimeout(60 * 1000);


Given('a user logs in with username {string} and password {string}', function (username, password) {

  // Write code here that turns the phrase above into concrete actions
  volLoginPage.usernameField.sendKeys(username);
  volLoginPage.passwordField.sendKeys(password);
  return volLoginPage.loginButton.click();
});

When('we select a customer called {string}', async function (customerName) {
  
  this.actions.click(volHomePage.customerContactButton);

  this.actions.type(volPartsEntryPage.nameSearchField, customerName);

  this.actions.click(volPartsEntryPage.customerSearchButton);

  // volPartsEntryPage.findCustomerInTable(customerName).first().click();
  this.actions.clickOnElementInTable(volPartsEntryPage.searchResultsTable, volPartsEntryPage.searchResultsRowSelector, customerName);

  return this.actions.click(volPartsEntryPage.selectCustomerButton);

});

Then('we see what vehicles they own', function () {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});