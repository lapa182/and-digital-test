import { Component, Output, EventEmitter } from '@angular/core';
import { ApiService } from '../providers/api.service';

@Component({
  selector: 'app-venue-form',
  templateUrl: './venue-form.component.html',
  styleUrls: ['./venue-form.component.scss']
})
export class VenueFormComponent {
  venueName: string;
  @Output() venuesList = new EventEmitter;

  constructor(private apiService:ApiService) { }

  searchForVenues() {
    this.apiService.getVenue().subscribe(data => {
      this.venuesList.emit(data);
    })
  }

}
