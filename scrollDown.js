
describe('Scroll Down Test', function(){

    beforeEach(function() {
        browser.ignoreSynchronization = true
        browser.get('https://www.google.com')
        browser.sleep(5000)
        browser.manage().window().maximize()
    })
    it('Perform Scroll Down Action', function() {
        element(by.name('q')).sendKeys('udemy')
        browser.sleep(2000)
        element(by.name('btnK')).click()
        browser.sleep(2000)
        //scrolling
        browser.executeScript('window.scroll(0,2000)').then(function(){
            browser.sleep(2000)
        })
    })
})