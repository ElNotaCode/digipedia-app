import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DigimonCardComponent } from './components/digimon-card/digimon-card.component';
import { DigimonListComponent } from './components/digimon-list/digimon-list.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { DigimonSearchComponent } from './components/digimon-search/digimon-search.component';

@NgModule({
  declarations: [
    AppComponent,
    DigimonCardComponent,
    DigimonListComponent,
    NavbarComponent,
    HomeComponent,
    DigimonSearchComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
