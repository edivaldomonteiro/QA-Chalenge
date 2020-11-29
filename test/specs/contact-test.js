//const { assert } = require('chai');
const Page = require('../pageobjects/contact-page');

describe('My application', () => {
    it('should open main page and click on contact link', () => {
        Page.open();
        Page.accessContactPage();
    });

    it('should validate error messages for each field', () => {
        const mail = 'eam@mail.com';
        const msg = 'I would like to inform that we have a problem with this order';
        Page.showAlertForEmptyFields(mail, msg);
    });

    it('should send a message successfully', () => {
        Page.open();
        Page.accessContactPage();
        const mail = 'eam@mail.com';
        const ref_ord = '2234534';
        const msg = 'I would like to inform that we have a problem with this order';
        Page.submitMessage(mail, ref_ord, msg);
    });
});


