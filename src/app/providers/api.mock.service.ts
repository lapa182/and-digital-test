import { Observable } from 'rxjs/Observable';

export const VenueItem = [
    [
      {
        "id": "4a43bcb7f964a520bba61fe3",
        "name": "Ponte do Brooklyn (Brooklyn Bridge)",
        "contact": {
          "twitter": "nyc_dot",
          "facebook": "166279802886",
          "facebookUsername": "NYCDOT",
          "facebookName": "NYC DOT"
        },
        "location": {
          "address": "Brooklyn Bridge",
          "lat": 40.70596749893083,
          "lng": -73.99670720100403,
          "labeledLatLngs": [
            {
              "label": "display",
              "lat": 40.70596749893083,
              "lng": -73.99670720100403
            }
          ],
          "distance": 720,
          "postalCode": "10038",
          "cc": "US",
          "city": "Nova Iorque",
          "state": "NY",
          "country": "Estados Unidos",
          "formattedAddress": [
            "Brooklyn Bridge",
            "Nova Iorque, NY 10038",
            "Estados Unidos"
          ]
        },
        "categories": [
          {
            "id": "4bf58dd8d48988d1df941735",
            "name": "Ponte",
            "pluralName": "Pontes",
            "shortName": "Ponte",
            "icon": {
              "prefix": "https://ss3.4sqi.net/img/categories_v2/parks_outdoors/bridge_",
              "suffix": ".png"
            },
            "primary": true
          }
        ],
        "verified": true,
        "stats": {
          "checkinsCount": 182690,
          "usersCount": 104554,
          "tipCount": 883
        },
        "url": "http://www.nyc.gov/dot",
        "venueRatingBlacklisted": true,
        "beenHere": {
          "lastCheckinExpiredAt": 0
        },
        "specials": {
          "count": 0,
          "items": []
        },
        "storeId": "",
        "hereNow": {
          "count": 0,
          "summary": "Não há ninguém aqui",
          "groups": []
        },
        "referralId": "v-1505039538",
        "venueChains": [
          {
            "id": "556a2f99a7c8957d73d43f24"
          }
        ],
        "hasPerk": false
      }
    ]
];

export class ApiServiceStub {
    getVenue() {
        return Observable.from(VenueItem);
    }
}