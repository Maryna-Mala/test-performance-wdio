import { expect } from 'chai';

describe('Login with invalid credentials for your free account', () => {
    it('should display error message when login with invalid credentials', async () => {
        await browser.url('/customer/account/login');
        await $('#email').setValue(process.env.LOGIN_EMAIL);
        await $('[name="login[password]"]').setValue(process.env.INVALID_PASSWORD);
        await $("//button[contains(@class, 'primary')]").click();
        let errorMessage = await $('[data-ui-id="message-error"]').getText();

        expect(errorMessage).to.include("Вхід в обліковий запис був неправильний");
    });
});