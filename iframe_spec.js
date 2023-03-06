describe('Handling Iframe', function() {

    it('Handling Iframe Test', function() {
        browser.waitForAngularEnabled(false)
        browser.get('https://jqueryui.com/datepicker/')
        browser.manage().window().maximize()
        browser.sleep(3000)
        browser.switchTo().frame(0)
        element(by.id('datepicker')).click()
        browser.sleep(3000)
        browser.switchTo().defaultContent()
        element(by.xpath('//*[@id="sidebar"]/aside[1]/ul/li[1]/a')).click() ////a[contains(text(),'Draggable')]
        browser.sleep(3000)
    })
})