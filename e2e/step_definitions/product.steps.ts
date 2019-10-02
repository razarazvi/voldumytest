// Import chai and the `expect` command.
import { Given, setDefaultTimeout, When, Then } from "cucumber";
import { AddProductPage } from "../page_objects/add-product.page";
import { HomePage } from "../page_objects/home.page";
import { ViewProductPage } from "../page_objects/view-product.page";

// Set Default Timeout for 1 minute (60,000 milliseconds)
setDefaultTimeout(60 * 1000);

const homePage: HomePage = new HomePage();
const addProductPage: AddProductPage = new AddProductPage();
const viewProductPage: ViewProductPage = new ViewProductPage();

const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;

Given("a product doesnt exist", function(dataTable) {
    const arrayOfProducts = dataTable.hashes();
    this.product = arrayOfProducts[0];
    /*
    * This removes the previous product
    */
    homePage.findProductInTable(this.product).click();
    viewProductPage.deleteButton.click();

    return expect(homePage.findProductInTable(this.product).isPresent()).to.eventually.be.false;
  });

When("I add the product", function() {
homePage.addProductButton.click();

addProductPage.productNameField.sendKeys(this.product.name);
addProductPage.productDescriptionField.sendKeys(this.product.description);
addProductPage.productPriceField.sendKeys(this.product.price);

return addProductPage.submitButtonField.click();
  });

Then("the product is created", function() {
// Expect that the product has now been created and can be seen on the view product page.
return expect(viewProductPage.productName(this.product).isPresent()).to.eventually.be.true;
  });
