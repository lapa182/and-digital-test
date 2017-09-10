import { TestBed, inject } from '@angular/core/testing';
import { BaseRequestOptions, Response, ResponseOptions, Http } from '@angular/http';

import { ApiService } from './api.service';
import { VenueItem } from './api.mock.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpTestingController } from '@angular/common/http/testing';

describe('Service: Api', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        ApiService,
      ]
    });
  });

  it('should return a venue', () => {
    const apiService = TestBed.get(ApiService);
    const http = TestBed.get(HttpTestingController);
    let response;

    apiService.getVenue().subscribe(venue => {
      response = venue;
    });

    http.expectOne('https://api.foursquare.com/v2//venues/search?ll=40.7,-74&query=brooklyn').flush(VenueItem);
    expect(response).toEqual(VenueItem);

  });

});