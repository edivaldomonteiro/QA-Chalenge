# QA-Chalenge

This is a repository containing automation test structure for ecommerce

It was developed using javascript framework webdriverIO

Steps to install/config the framework:

Install Node JS

Run the following commands 

    npm init

    npm install webdriverio --save-dev

    npm install @wdio/cli

    ./node_modules/.bin/wdio config

    npm install chai --save-dev

    npm install chai-webdriverio --save-dev

    npm install local-runner --save-dev


Go into our configuration file [wdio.conf.js] and go to the beforeTest section. Uncomment and add this:

    const chai = require('chai')
    const chaiWebdriver = require('chai-webdriverio').default
    chai.use(chaiWebdriver(browser))

    global.assert = chai.assert
    global.should = chai.should
    global.expect = chai.expect

To run the test, use the command
    npm run test
