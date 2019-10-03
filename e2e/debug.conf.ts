import { browser, Config } from "protractor";

export const config: Config = {

    seleniumAddress: "http://127.0.0.1:4444/wd/hub",

    baseUrl: "https://us.val.mamvol.uk/r/1.8.4/web/authenticate",

    allScriptsTimeout: 60000,

    framework: "custom",
    frameworkPath: require.resolve("protractor-cucumber-framework"),

    specs: [
      "../e2e/features/*.feature",
    ],

    onPrepare: () => {
        browser.manage().window().maximize();
    },

    cucumberOpts: {
        compiler: "ts:ts-node/register",
        format: "json:.tmp/results.json",
        profile: false,
        require: ["./step_definitions/*.steps.js", "./support/hooks.js"],
        tags: "@runThis",
        "no-source": true,
    },

    plugins: [{
      options: {
        automaticallyGenerateReport: true,
        removeExistingJsonReportFile: true,
      },
      package: "protractor-multiple-cucumber-html-reporter-plugin",

    }],
};