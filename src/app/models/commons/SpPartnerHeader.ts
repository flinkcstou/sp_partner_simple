export class SpPartnerHeader {
    title?: string;
    backButton?: boolean;
    orders?: boolean;
    marketplace?: boolean;
    notifications?: boolean;
    exit?: boolean;
    logo?: boolean;


    constructor(title?: string, backButton?: boolean, orders?: boolean, marketplace?: boolean, notifications?: boolean,
                exit?: boolean, logo?: boolean) {
        this.title = title;
        this.backButton = backButton;
        this.orders = orders;
        this.marketplace = marketplace;
        this.notifications = notifications;
        this.exit = exit;
        this.logo = logo;
    }

    static HOME(): SpPartnerHeader {
        return new SpPartnerHeader(null,
            null,
            true,
            true,
            true);
    }

    static WITH_TITLE_BACK(title: string): SpPartnerHeader {
        return new SpPartnerHeader(title,
            true,
            true,
            true,
            true);
    }


}
