import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DigimonListComponent } from './components/digimon-list/digimon-list.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { SearchFormComponent } from './components/shared/search-form/search-form.component';
import { DigimonCardComponent } from './components/shared/digimon-card/digimon-card.component';
import { SearchDigimonPipe } from './pipes/search-digimon.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DigimonListComponent,
    NavbarComponent,
    HomeComponent,
    SearchFormComponent,
    DigimonCardComponent,
    SearchDigimonPipe,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
