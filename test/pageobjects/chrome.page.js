import BasePage from './base.page';

class ChromePage extends BasePage {
    get searchBox() { return $('//textarea[@name="q"]'); }
    get firstResult() { return $('(//div[@class="g"])[1]//div[@class="g"]//a'); }
    get elfieLogo() { return $('//img[@alt="Elfie Logotype"]'); }
    get hamburgerMenu() { return $('//div[@aria-label="menu"]'); }
    get closeButton() { return $('//div[contains(@class, "w--open")]'); }
    get copyright() { return $('//div[contains(text(), "Copyright © 2024 Elfie Pte. Ltd.")]'); }

    async search(keyword) {
        await this.searchBox.setValue(keyword);
        await browser.keys(['Enter']);
    }

    async clickFirstResult() {
        await this.firstResult.click();
    }

    async verifyLogoAndCapture() {
        await expect(this.elfieLogo).toBeDisplayed();
        await this.captureScreenshot('elfie_logo');
    }

    async verifyHamburgerMenuAndCapture() {
        await this.hamburgerMenu.click();
        await expect(this.closeButton).toBeDisplayed();
        await this.captureScreenshot('hamburger_menu');
        await this.closeButton.click();
    }

    async verifyCopyrightAndCapture() {
        await this.scrollToBottom();
        await expect(this.copyright).toBeDisplayed();
        await this.captureScreenshot('copyright');
    }
}

export default new ChromePage();