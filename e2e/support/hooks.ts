import { Before, After, Status } from "cucumber";

import { browser } from "protractor";

// This will run before each scenario
Before({timeout: 100 * 1000}, async function() {

    // Opens the website to the default URL in the 'protractor.config.ts' file
    await browser.get("");

});

// This will run after every scenario
After({timeout: 100 * 1000}, async function(scenario) {

    // check to see if the scenario failed
    if (scenario.result.status === Status.FAILED) {
        // screenShot is a base-64 encoded PNG
        const screenShot = await browser.takeScreenshot();
        // attach the screenshot to the report
        this.attach(screenShot, "image/png");
    }
});
