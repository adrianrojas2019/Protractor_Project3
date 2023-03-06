var screenshots = require('protractor-take-screenshots-on-demand')
describe('Locators Angular Test', function(){

    beforeEach(function() {
        browser.get('https://www.way2automation.com/angularjs-protractor/banking/#/login')
        browser.sleep(5000)
        browser.manage().window().maximize()
    })
    it('Perform Locators Angular Action', function() {

        //Click on customer Login
        browser.sleep(3000)   
        element(by.buttonText('Customer Login')).click()
        screenshots.takeScreenshot('Login Test')
        browser.sleep(3000)    

        element(by.model('custId')).click()
        browser.sleep(3000)    
        var customerLists = element.all(by.repeater('cust in Customers'))
        customerLists.each(function(element, index){
            element.getText().then(function(text) {
                console.log(index, text)
                if (text === 'Neville Longbottom'){
                    console.log("**********CLICKED?????")
                    customerLists.get(index).click()
                }
            })
        })

        browser.sleep(3000)
        element(by.buttonText('Login')).click()
        browser.sleep(3000)      

        // By Model
        var depositButton = element.all(by.buttonText('Deposit'))
        depositButton.get(0).click()

        element(by.model('amount')).sendKeys('1000')
        depositButton.get(1).click()
        browser.sleep(3000)      

        var error = element(by.xpath("//span[contains(text(),'Deposit Successful')]"));
        expect(error.getText()).toBe('Deposit Successful');         
        browser.sleep(3000)   
        
        /* var tagNameText = element(by.tagName("input")).getAttribute("name")
        tagNameText.then(console.log)
        */
    })
})