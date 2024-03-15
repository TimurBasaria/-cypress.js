import {locators} from'./locators.json';

    export class AuthPage extends BasePage {
    constructor() {
       super() 
       this.base = locators.authorization;
    }
}