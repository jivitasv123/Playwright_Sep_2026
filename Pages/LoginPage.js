

class LoginPage {

    //constructor
    constructor(page) {
        this.page = page;
        this.username = '[data-test="username"]';
        this.password = '[data-test="password"]';
        this.loginBtn = '#login-button'
    }
    //Methods
    async login(username, pwd) {
        await this.page.locator(this.username).fill(username);
        await this.page.locator(this.password).fill(pwd);
        await this.page.locator(this.loginBtn).click();
    }

}
//VAR REF = NEW CLASSNAME
//REF.METHODNAME();
module.exports = { LoginPage };