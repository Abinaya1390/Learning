import { Config, browser } from "protractor";
import * as reporter from "cucumber-html-reporter"

// const jsonReports = process.cwd() + "/reports/json";
var excelToJson = require('./xceltojson');

export let config: Config = {
    directConnect : true,
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
  
    capabilities: {
        'browserName': 'chrome',
      },

      // useAllAngular2AppRoots: true,
      specs: ['../Features/Test1.feature'],

    
    onPrepare: () => {
        browser.ignoreSynchronization = true;
        browser.manage().window().maximize();
      
    },

      cucumberOpts: {

        format:'json:./cucumberreport.json',
      

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
