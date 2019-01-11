import {Builder, WebDriver} from "selenium-webdriver";

console.log("Hello World!");

const DRIVER_ID_TO_USE = "firefox";

(async () => {

    const driver: WebDriver = await new Builder().forBrowser(DRIVER_ID_TO_USE).build();

    await driver.get("https://google.com/");

    // TODO: Do bot stuff

    await driver.close();

})();
