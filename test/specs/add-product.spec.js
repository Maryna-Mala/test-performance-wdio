import { expect } from 'chai';

describe("Add the first product item to the cart", () => {
    it("should navigate to home page and add first product item to the cart", async () => {
      await browser.url('/');
      await $('//li[contains(@class, "nav-1")]').click();
      
      const productItems = $$("//li[contains(@class, 'product-item')]");
      expect(await productItems[0].isDisplayed()).to.be.true;
      await productItems[0].click();
      
      expect(await $('#minicart-content-wrapper').isDisplayed()).to.be.true;
    });
  });