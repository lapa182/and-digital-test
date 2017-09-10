import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { VenueModule } from '../models/venue';

const API_URL = 'https://api.foursquare.com/v2/';

@Injectable()
export class ApiService {

  constructor(private http: HttpClient) {}

  getVenue(): Observable<VenueModule> {
    // @TODO remove hard-code, it's just for test purposes
    return this.http.get(API_URL + '/venues/search?ll=40.7,-74&query=brooklyn')
          .catch(this.handleError);
  }

  handleError(error) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server Error');
  }

} 