
describe('Protractor Demo App', function() {
    it('Should have a title', function(){
        browser.get("http://www.globalsqa.com/angularJs-protractor/BankingProject/#/login")

        expect(browser.getTitle()).toEqual('XYZ Bank')
    })
})