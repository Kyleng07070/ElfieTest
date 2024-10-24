import ChromePage from '../pageobjects/chrome.page';
import searchData from '../data/search.data';

describe('Chrome App End-to-End Test', () => {
    before(async () => {
        // Launch Chrome app and navigate to Google
        await browser.url('https://www.google.com');
    });

    it('should search for Elfie and verify website elements', async () => {
        // Search for Elfie
        await ChromePage.search(searchData.searchKeyword);
        
        // Click first result
        await ChromePage.clickFirstResult();
        
        // Verify logo and capture screenshot
        await ChromePage.verifyLogoAndCapture();
        
        // Verify hamburger menu and capture screenshot
        await ChromePage.verifyHamburgerMenuAndCapture();
        
        // Verify copyright and capture screenshot
        await ChromePage.verifyCopyrightAndCapture();
    });
});