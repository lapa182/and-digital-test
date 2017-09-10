import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { NgxJsonViewModule } from 'ngx-json-view';
// Angular introduced this new module rewriting HttpModule, so we don't need to manually extract json.
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ApiService } from './providers/api.service';
import { VenueFormComponent } from './venue-form/venue-form.component';

@NgModule({
  declarations: [
    AppComponent,
    VenueFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgxJsonViewModule
  ],
  providers: [
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
