import { $, element, by, browser, ExpectedConditions } from "protractor";

export class VolPartsEntryPage{

    public nameSearchField = $("input#txtName");

    public customerSearchButton = $("button#btnsearchCust");

    public selectCustomerButton = $("button#btnselectCust");

    public findCustomerInTable = (customerName) => {

        let grid = $("div#gridcustomerSearchGrid");
        let row = grid.$("div.ui-grid-cell-contents.ng-binding.ng-scope");


        browser.wait(ExpectedConditions.visibilityOf(row));

        return grid
            .all(by.cssContainingText("div.ui-grid-cell-contents.ng-binding.ng-scope", customerName));
    }

}