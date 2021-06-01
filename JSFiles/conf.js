"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const protractor_1 = require("protractor");
// const jsonReports = process.cwd() + "/reports/json";
var excelToJson = require('./xceltojson');
exports.config = {
    directConnect: true,
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    capabilities: {
        'browserName': 'chrome',
    },
    // useAllAngular2AppRoots: true,
    specs: ['../Features/Test1.feature'],
    onPrepare: () => {
        protractor_1.browser.ignoreSynchronization = true;
        protractor_1.browser.manage().window().maximize();
    },
    cucumberOpts: {
        format: 'json:./cucumberreport.json',
        require: [
            'Features/Step_Definitions/StepDef.js',
        ],
    },
    onComplete: () => {
        var reporter = require('cucumber-html-reporter');
        var options = {
            theme: 'bootstrap',
            jsonFile: './JSFiles/cucumberreport.json',
            output: './Results/cucumber_report.html',
            reportSuiteAsScenarios: true,
            scenarioTimestamp: true,
            launchReport: true,
            metadata: {
                "App Version": "0.3.2",
                "Test Environment": "STAGING",
                "Browser": "Chrome 85.0.4183.83",
                "Platform": "Windows 10",
                "Parallel": "Scenarios",
                "Executed": "Remote"
            }
        };
        reporter.generate(options);
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2NvbmYudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsMkNBQTZDO0FBRzdDLHVEQUF1RDtBQUN2RCxJQUFJLFdBQVcsR0FBRyxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUM7QUFFL0IsUUFBQSxNQUFNLEdBQVc7SUFDeEIsYUFBYSxFQUFHLElBQUk7SUFDcEIsU0FBUyxFQUFFLFFBQVE7SUFDbkIsYUFBYSxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsK0JBQStCLENBQUM7SUFFL0QsWUFBWSxFQUFFO1FBQ1YsYUFBYSxFQUFFLFFBQVE7S0FDeEI7SUFFRCxnQ0FBZ0M7SUFDaEMsS0FBSyxFQUFFLENBQUMsMkJBQTJCLENBQUM7SUFHdEMsU0FBUyxFQUFFLEdBQUcsRUFBRTtRQUNaLG9CQUFPLENBQUMscUJBQXFCLEdBQUcsSUFBSSxDQUFDO1FBQ3JDLG9CQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUM7SUFFekMsQ0FBQztJQUVDLFlBQVksRUFBRTtRQUVaLE1BQU0sRUFBQyw0QkFBNEI7UUFHakMsT0FBTyxFQUFFO1lBQ1Asc0NBQXNDO1NBQ3ZDO0tBQ0o7SUFHRCxVQUFVLEVBQUUsR0FBRyxFQUFFO1FBQ2YsSUFBSSxRQUFRLEdBQUcsT0FBTyxDQUFDLHdCQUF3QixDQUFDLENBQUM7UUFFakQsSUFBSSxPQUFPLEdBQUc7WUFDVixLQUFLLEVBQUUsV0FBVztZQUNsQixRQUFRLEVBQUUsK0JBQStCO1lBQ3pDLE1BQU0sRUFBRSxnQ0FBZ0M7WUFDeEMsc0JBQXNCLEVBQUUsSUFBSTtZQUM1QixpQkFBaUIsRUFBRSxJQUFJO1lBQ3ZCLFlBQVksRUFBRSxJQUFJO1lBQ2xCLFFBQVEsRUFBRTtnQkFDTixhQUFhLEVBQUUsT0FBTztnQkFDdEIsa0JBQWtCLEVBQUUsU0FBUztnQkFDN0IsU0FBUyxFQUFFLHFCQUFxQjtnQkFDaEMsVUFBVSxFQUFFLFlBQVk7Z0JBQ3hCLFVBQVUsRUFBRSxXQUFXO2dCQUN2QixVQUFVLEVBQUUsUUFBUTthQUN2QjtTQUNKLENBQUM7UUFFRixRQUFRLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBRS9CLENBQUM7Q0FDSCxDQUFDIn0=