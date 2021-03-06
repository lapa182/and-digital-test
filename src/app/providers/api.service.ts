import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { VenueModule } from '../models/venue';

const API_URL = 'https://api.foursquare.com/v2/';
const API_CLIENT_ID= '40WDAUVIHFMGDMN2DESUCD0DWF5HLSUIPKYDRFCIDHVSFC50';
const API_CLIENT_SECRET = 'OGBH41JM14DYUDKQ3S5WCH24YF34JSGEBS2DI4YYAMIWHNL0';

@Injectable()
export class ApiService {
  userLocation;

  constructor(private http: HttpClient) {}

  getCurrentDate() {
    // Extracted from https://stackoverflow.com/a/3067896
    let date = new Date();
    let month = date.getMonth() + 1;
    let day = date.getDate();
  
    return [date.getFullYear(), (month > 9 ? '' : '0') + day, (day > 9 ? '' : '0') + day].join('');
  };

  getPopularVenues(venue, userLocation): Observable<VenueModule> {
    return this.http.get(API_URL + '/venues/explore?ll='+ userLocation +'&query=' + 
          venue + '&client_id=' + 
          API_CLIENT_ID + '&client_secret=' + 
          API_CLIENT_SECRET + '&v=' + 
          this.getCurrentDate()).catch(this.handleError);
  }

  handleError(error) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server Error');
  }

} 