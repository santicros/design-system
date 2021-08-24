import { injectAxe, checkA11y } from 'axe-playwright';

describe('Button', () => {
  describe('base', () => {
    it('triggers axe on the document', async () => {
      await page.goto('http://localhost:6006/iframe.html?id=design-system-molecules-button--base&viewMode=story');
      await injectAxe(page);
      await checkA11y(page);
    });
  });

  describe('sizes', () => {
    it('triggers axe on the document', async () => {
      await page.goto('http://localhost:6006/iframe.html?id=design-system-molecules-button--sizes&viewMode=story');
      await injectAxe(page);
      await checkA11y(page);
    });
  });

  describe('variants', () => {
    it('triggers axe on the document', async () => {
      await page.goto('http://localhost:6006/iframe.html?id=design-system-molecules-button--variants&viewMode=story');
      await injectAxe(page);
      await checkA11y(page);
    });
  });

  describe('icons', () => {
    it('triggers axe on the document', async () => {
      await page.goto('http://localhost:6006/iframe.html?id=design-system-molecules-button--icons&viewMode=story');
      await injectAxe(page);
      await checkA11y(page);
    });
  });

  describe('disabled', () => {
    it('triggers axe on the document', async () => {
      await page.goto('http://localhost:6006/iframe.html?id=design-system-molecules-button--disabled&viewMode=story');
      await injectAxe(page);
      await checkA11y(page);
    });
  });
});
