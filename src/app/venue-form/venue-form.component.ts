import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { ApiService } from '../providers/api.service';

@Component({
  selector: 'app-venue-form',
  templateUrl: './venue-form.component.html',
  styleUrls: ['./venue-form.component.scss']
})
export class VenueFormComponent {
  venueName: string;
  userLocation;
  @Output() venuesResponseList = new EventEmitter;

  constructor(private apiService:ApiService) { }

  getUserLocation() {
    return new Promise((resolve, reject) => {
      if ( navigator.geolocation ) {
        
          navigator.geolocation.getCurrentPosition(function(position) {
            resolve(this.userLocation = position.coords.latitude + ',' + position.coords.longitude);
          }.bind(this));
        
        } else {
          reject(alert('Geolocation is not supported by this browser.'));
        }
    });
  }

  searchForVenues() {

    document.querySelector('button').classList.add('is-loading');
    this.getUserLocation().then((location) => {

      this.apiService.getPopularVenues(this.venueName, location).subscribe(data => {
        document.querySelector('button').classList.remove('is-loading');
        this.venuesResponseList.emit(data);
      });

    });
 
  }

}
