import { ElementFinder, ExpectedConditions, browser, by } from "protractor";

export class Actions {

    public sendKeys = async (element: ElementFinder, text: string) => {
        await browser.wait(ExpectedConditions.visibilityOf(element));
        await element.sendKeys(text);
    }

    public click = async (element: ElementFinder) => {
        await browser.wait(ExpectedConditions.elementToBeClickable(element));
        await element.click();
    }

    public clickOnElementInTable = async (tableElement: ElementFinder, rowSelector: string, text: string) => {
            const row = tableElement.$(rowSelector);
            await browser.wait(ExpectedConditions.visibilityOf(row));
            await tableElement.all(by.cssContainingText(rowSelector, text)).first().click();
        }

}