export interface VenueModule {
    
    id: string;
    name: string;
    contact: {
        twitter: string;
        facebook: string;
        facebookUsername: string;
        facebookName: string;
    };
    location: {
        address: string;
        lat: number;
        lng: number;
        labeledLatLngs: [
            {
                label: string;
                lat: number;
                lng: number;
            }
        ];
        distance: number;
        postalCode: string;
        cc: string;
        city: string;
        state: string;
        country: string;
        formattedAddress: string[];
    };
    categories: [
        {
            id: string;
            name: string;
            pluralName: string;
            shortName: string;
            icon: {
                prefix: string;
                suffix: string;
            };
            primary: boolean;
        }
    ];
    verified: boolean;
    stats: {
        checkinsCount: number;
        usersCount: number;
        tipCount: number;
    };
    url: string;
    venueRatingBlacklisted: boolean;
    beenHere: {
        lastCheckinExpiredAt: number;
    };
    specials: {
        count: number;
        items: any[];
    };
    storeId: string;
    hereNow: {
        count: number;
        summary: string;
        groups: any[];
    };
    referralId: string;
    venueChains: [
        {
            id: string;
        }
    ];
    hasPerk: boolean;

}
    
    