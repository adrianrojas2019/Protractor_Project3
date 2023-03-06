var log4jsGen = require('./util/helper.js')
describe('Full Screen Demo', function() {
    it('Logging Action', function() {

        browser.get('http://juliemr.github.io/protractor-demo/')
        browser.manage().window().maximize()
        browser.sleep(1000)
        element(by.model('first')).sendKeys('2')
        browser.sleep(1000)
        element(by.model('second')).sendKeys('4')
        browser.sleep(1000)
        element(by.buttonText('Go!')).click()
        log4jsGen.getLogger().info("##### Browser Launched ######")
        console.log("Result in console is:-")
        expect(browser.getTitle()).toEqual('Super Calculator')
        log4jsGen.getLogger().info("###### Browser Closed ######")
        browser.sleep(2000)
    })
})