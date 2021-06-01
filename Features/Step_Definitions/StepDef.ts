
import { Given, When, Then, Before, After, Status } from "cucumber"
import { browser, element, by } from "protractor"
import XLSX from 'xlsx';


var xceltojson = require('../../xceltojson');


Given('launch the URL',{timeout:60*1000}, async function() {
   await browser.get("https://www.amazon.in/").then (async function() {
    browser.manage().window().maximize();
 await browser.sleep(5000)
})
})

When('I enter the login',async function() {
await element(by.xpath("//a[@id='nav-link-accountList']")).click();
await element(by.xpath("//input[@name='email']")).sendKeys(xceltojson.testConfig.loginname);
await element(by.xpath("//input[@id='continue']")).click();
await element(by.xpath("//input[@id='ap_password']")).sendKeys(xceltojson.testConfig.loginpass);
await element(by.xpath("//input[@id='signInSubmit']")).click();
await browser.sleep(1000)
});

When('I search for the item', async function () {
   await browser.sleep(500)
await element(by.xpath("//input[@id='twotabsearchtextbox']")).click();
await element(by.xpath("//input[@id='twotabsearchtextbox']")).sendKeys('pears'); 
await element(by.xpath("//input[@id='nav-search-submit-button']")).click();

})


