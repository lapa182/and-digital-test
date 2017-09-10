import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-venues-list',
  templateUrl: './venues-list.component.html',
  styleUrls: ['./venues-list.component.scss']
})
export class VenuesListComponent implements OnInit {
  @Input() venuesList;
  
  constructor() { }

  ngOnInit() {

    console.log(this.venuesList);
  }

}
