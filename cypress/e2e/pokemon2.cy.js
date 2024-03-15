import{locators} from './helpers/locators.json';

export class pokemon extends BasePage {
    constructor() {
        super();
            this.auth = locators.authorization
    }
}