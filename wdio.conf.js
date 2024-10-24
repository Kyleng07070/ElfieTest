const path = require('path');
  
exports.config = {
    runner: 'local',
    port: 4723,
    specs: [
        './test/specs/**/*.js'
    ],
    capabilities: [{
        platformName: 'Android',
        'appium:deviceName': 'Pixel_4_API_30',
        'appium:platformVersion': '11.0',
        'appium:automationName': 'UiAutomator2',
        'appium:app': path.join(process.cwd(), './apps/chrome.apk'),
        'appium:appPackage': 'com.android.chrome',
        'appium:appActivity': 'com.google.android.apps.chrome.Main'
    }],
    logLevel: 'info',
    bail: 0,
    baseUrl: 'https://www.google.com',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: ['appium'],
    framework: 'mocha',
    reporters: [
        'spec',
        ['allure', {
            outputDir: 'allure-results',
            disableWebdriverStepsReporting: true,
            disableWebdriverScreenshotsReporting: false,
        }]
    ],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    }
}