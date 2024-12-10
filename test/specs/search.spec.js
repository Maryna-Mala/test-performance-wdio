import { expect } from 'chai';

describe('Search products using the search feature', () => {
    it('should be able to search for products using the search bar', async () => {
        await browser.url('/');
        await $("//*[contains(@class, 'search-toggle')]/div[@class='icon-block']").click();
        await $('#search.input-text').setValue("coffee");
        await $("//button[contains(@class, 'search')]").click();
        
        expect(await $("//span[contains(text(), 'coffee')]").isDisplayed()).to.be.true;
    });
});