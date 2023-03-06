describe('Radio Buttons', function(){

    beforeEach(function() {
        browser.ignoreSynchronization = true
        browser.get('https://materializecss.com/radio-buttons.html')
        browser.sleep(5000)
        browser.manage().window().maximize()
    })
    it('Click Radio Button', function() {
        element(by.xpath("//span[contains(text(),'Green')]")).click()
        browser.sleep(5000)
        element(by.xpath("//span[contains(text(),'Yellow')]")).click()
        browser.sleep(5000)
    })
})