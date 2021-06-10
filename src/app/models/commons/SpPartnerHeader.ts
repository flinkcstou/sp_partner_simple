import {HeaderTitle} from './HeaderTitle';

export class SpPartnerHeader {
    identity?: number;
    title?: HeaderTitle;
    backButton?: boolean;
    basket?: boolean;
    exit?: boolean;
    search?: boolean;
    route?: string;


    constructor(identity?: number, title?: HeaderTitle, backButton?: boolean, basket?: boolean, exit?: boolean,
                search?: boolean, route?: string) {
        this.identity = identity;
        this.title = title;
        this.backButton = backButton;
        this.basket = basket;
        this.exit = exit;
        this.search = search;
        this.route = route;
    }

    static HOME(): SpPartnerHeader {
        const homeTitle: HeaderTitle = {additionalTitle: '', position: 'left', title: 'Home'};
        return new SpPartnerHeader(1,
            homeTitle,
            null,
            null,
            true,
            null,
            'asd');
    }


}
