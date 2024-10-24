export default class BasePage {
    async captureScreenshot(name) {
        const timestamp = new Date().getTime();
        await browser.saveScreenshot(`./screenshots/${name}_${timestamp}.png`);
    }

    async scrollToBottom() {
        await browser.execute('mobile: scrollGesture', {
            left: 100, top: 100, width: 200, height: 200,
            direction: 'down',
            percent: 1.0
        });
    }
}