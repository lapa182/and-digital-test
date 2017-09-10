import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
// Angular introduced this new module rewriting HttpModule, so we don't need to manually extract json.
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ApiService } from './providers/api.service';
import { VenueFormComponent } from './venue-form/venue-form.component';
import { VenuesListComponent } from './venues-list/venues-list.component';

@NgModule({
  declarations: [
    AppComponent,
    VenueFormComponent,
    VenuesListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
