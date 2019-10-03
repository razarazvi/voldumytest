import { When, Then, Given, setDefaultTimeout } from "cucumber";
import {VolHomePage } from "../page_objects/vol_objects/vol-home.page";
import {VolLoginPage} from "../page_objects/vol_objects/vol-login.page";
import {VolPartsEntryPage} from "../page_objects/vol_objects/vol-pe.page";

const volHomePage: VolHomePage = new VolHomePage();
const volLoginPage: VolLoginPage = new VolLoginPage();
const volPEPage: VolPartsEntryPage = new VolPartsEntryPage();

const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;

setDefaultTimeout(60 * 1000);


Given('a user logs in with username {string} and password {string}', function (username, password) {

  // Write code here that turns the phrase above into concrete actions
  this.actions.sendKeys(volLoginPage.usernameField, username);
  this.actions.sendKeys(volLoginPage.passwordField, password);

  return this.actions.click(volLoginPage.loginButton);
});

When('we select a customer called {string}', async function (customerName) {
  
  this.actions.click(volHomePage.customerContactButton);

  this.actions.sendKeys(volPEPage.nameSearchField, customerName);

  this.actions.click(volPEPage.customerSearchButton);

  // volPartsEntryPage.findCustomerInTable(customerName).first().click();
  this.actions.clickOnElementInTable(volPEPage.searchResultsTable, volPEPage.searchResultsRowSelector, customerName);

  return this.actions.click(volPEPage.selectCustomerButton);

});

Then('we see what vehicles they own', function () {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});