// conf.js
/**  
 * Jasmine HTML Reporter
*/
var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
var screenshots = require('protractor-take-screenshots-on-demand')

exports.config = {
    directConnect: true,
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['locators_angular.js'],
    capabilities: {
/*         chromeOptions: {
            args: ["--headless"]
        }, */
        browserName: 'chrome'
    },
    //multiCapabilities: [{
    // browserName: 'chrome',
    // },{ browserName: 'firefox'}
    //}]
    onPrepare: function () {
        jasmine.getEnv().addReporter(
            new Jasmine2HtmlReporter({
                savePath: 'target/screenshots',
                screenshotsFolder: 'images',
                fileNamePrefix: 'March_Release_',
                fileNameDateSuffix: true
            })
        );
        //joiner between browser name and file name
        screenshots.browserNameJoiner = ' - ' // this is the default
        //folder of screenshots
        screenshots.screenShotDirectory = 'target/screenshot'
        //creates folder of screenshots
        screenshots.createDirectory()
    }
}