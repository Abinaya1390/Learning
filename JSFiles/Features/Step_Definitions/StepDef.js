"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("cucumber");
const protractor_1 = require("protractor");
var xceltojson = require('../../xceltojson');
cucumber_1.Given('launch the URL', { timeout: 60 * 1000 }, function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.get("https://www.amazon.in/").then(function () {
            return __awaiter(this, void 0, void 0, function* () {
                protractor_1.browser.manage().window().maximize();
                yield protractor_1.browser.sleep(5000);
            });
        });
    });
});
cucumber_1.When('I enter the login', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.element(protractor_1.by.xpath("//a[@id='nav-link-accountList']")).click();
        yield protractor_1.element(protractor_1.by.xpath("//input[@name='email']")).sendKeys(xceltojson.testConfig.loginname);
        yield protractor_1.element(protractor_1.by.xpath("//input[@id='continue']")).click();
        yield protractor_1.element(protractor_1.by.xpath("//input[@id='ap_password']")).sendKeys(xceltojson.testConfig.loginpass);
        yield protractor_1.element(protractor_1.by.xpath("//input[@id='signInSubmit']")).click();
        yield protractor_1.browser.sleep(1000);
    });
});
cucumber_1.When('I search for the item', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.sleep(500);
        yield protractor_1.element(protractor_1.by.xpath("//input[@id='twotabsearchtextbox']")).click();
        yield protractor_1.element(protractor_1.by.xpath("//input[@id='twotabsearchtextbox']")).sendKeys('pears');
        yield protractor_1.element(protractor_1.by.xpath("//input[@id='nav-search-submit-button']")).click();
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3RlcERlZi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL0ZlYXR1cmVzL1N0ZXBfRGVmaW5pdGlvbnMvU3RlcERlZi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUNBLHVDQUFtRTtBQUNuRSwyQ0FBaUQ7QUFJakQsSUFBSSxVQUFVLEdBQUcsT0FBTyxDQUFDLGtCQUFrQixDQUFDLENBQUM7QUFHN0MsZ0JBQUssQ0FBQyxnQkFBZ0IsRUFBQyxFQUFDLE9BQU8sRUFBQyxFQUFFLEdBQUMsSUFBSSxFQUFDLEVBQUU7O1FBQ3ZDLE1BQU0sb0JBQU8sQ0FBQyxHQUFHLENBQUMsd0JBQXdCLENBQUMsQ0FBQyxJQUFJLENBQUU7O2dCQUNqRCxvQkFBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDO2dCQUN4QyxNQUFNLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFBO1lBQzFCLENBQUM7U0FBQSxDQUFDLENBQUE7SUFDRixDQUFDO0NBQUEsQ0FBQyxDQUFBO0FBRUYsZUFBSSxDQUFDLG1CQUFtQixFQUFDOztRQUN6QixNQUFNLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDbkUsTUFBTSxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsd0JBQXdCLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzVGLE1BQU0sb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLHlCQUF5QixDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUMzRCxNQUFNLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDaEcsTUFBTSxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsNkJBQTZCLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQy9ELE1BQU0sb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUE7SUFDekIsQ0FBQztDQUFBLENBQUMsQ0FBQztBQUVILGVBQUksQ0FBQyx1QkFBdUIsRUFBRTs7UUFDM0IsTUFBTSxvQkFBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQTtRQUMzQixNQUFNLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxvQ0FBb0MsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDdEUsTUFBTSxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsb0NBQW9DLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNoRixNQUFNLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyx5Q0FBeUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7SUFFM0UsQ0FBQztDQUFBLENBQUMsQ0FBQSJ9