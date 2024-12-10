import { expect } from 'chai';

describe('Change the website language to English', () => {
    it('should change the language to English when clicked', async () => {
        await browser.url('/');
        await $("//li[contains(@class, 'view-en')]").click();
        await $('#switcher-language-trigger').waitForDisplayed();
    
        expect(await $('#switcher-language-trigger').getText()).to.include('EN');
    });
});