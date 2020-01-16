'use strict';

exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['formulario.js'],

    allScriptsTimeout: 30000,
    capabilities: {
        browserName: 'chrome',
        chromeOptions: {
            args: ["--disable-gpu", '--window-size=1400x1000', '--no-sandbox', '--w3c=false' ],
            w3c: false
        },
    }
};