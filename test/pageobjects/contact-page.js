const { assert } = require("chai");

class contactPage {
    get contactLink () { return $('#contact-link a') }
    get header() { return $('.page-heading') }
    get email() {return $('#email')}
    get reference() {return $('#id_order')}
    get message() {return $('#message')}
    get iconHome() {return $('.icon-home')}
    get sendButton() { return $('#submitMessage') }
    get alert() {return $('.alert') }
    get alertCont() {return $('.alert li') }
    get successAlert() {return $('.alert')}

    get subjectDropdownMenu() { return $('#id_contact') }
    get subjectDropdownMenuOption1() { return $('#id_contact option:nth-child(1)') }
    get subjectDropdownMenuOption2() { return $('#id_contact option:nth-child(2)') }
    get subject () { return $('#password') }

    open () {
        return browser.url('/')
    }

    accessContactPage() {
        if (this.contactLink.isExisting() === true){
            this.contactLink.click();
        }
        assert.equal(this.header.getText(), 'CUSTOMER SERVICE - CONTACT US')   
    }

    clickDropdownMenu() {
        this.subjectDropdownMenu.waitForDisplayed()
        this.subjectDropdownMenu.click()
    }

    selectSubject1() {
        this.clickDropdownMenu()
        this.subjectDropdownMenuOption1.waitForDisplayed()
        this.subjectDropdownMenuOption1.click()
    }

    sendContact() {
        this.sendButton.click()
    }

    alertDisplayed() {
        return this.alert.isDisplayed()
    }

    showAlertForEmptyFields(mail, msg) {
        this.sendContact()
        assert.equal(this.alertDisplayed(), true)
        assert.equal(this.alertCont.getText(), 'Invalid email address.')
        this.email.setValue(mail)
        this.sendContact()
        assert.equal(this.alertDisplayed(), true)
        assert.equal(this.alertCont.getText(), 'The message cannot be blank.')
        this.message.setValue(msg)
        this.sendContact()
        assert.equal(this.alertDisplayed(), true)
        assert.equal(this.alertCont.getText(), 'Please select a subject from the list provided.')
        this.iconHome.click()
    }

    submitMessage(mail, ref_ord, msg){
        this.email.setValue(mail)
        this.reference.setValue(ref_ord)
        this.message.setValue(msg)
        this.selectSubject1()
        this.sendContact()
        assert.equal(this.successAlert.getText() , 'Your message has been successfully sent to our team.')
    }

}

module.exports = new contactPage();
