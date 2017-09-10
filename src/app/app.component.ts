import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  venuesResponseList;
  
  receiveData($event) {
    this.venuesResponseList = $event;
  }
}
