import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TrackerComponent } from './tracker/tracker.component';
import { HeaderComponent } from './utils/header/header.component';
import { FooterComponent } from './utils/footer/footer.component';
import { HomeComponent } from './utils/home/home.component';
import { ShipFormComponent } from './shipform/ship-form/ship-form.component';

@NgModule({
  declarations: [
    AppComponent,
    TrackerComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ShipFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
