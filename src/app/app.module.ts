import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DigimonCardComponent } from './components/digimon-list/digimon-card/digimon-card.component';
import { DigimonListComponent } from './components/digimon-list/digimon-list.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { SearchFormComponent } from './components/shared/search-form/search-form.component';

@NgModule({
  declarations: [
    AppComponent,
    DigimonCardComponent,
    DigimonListComponent,
    NavbarComponent,
    HomeComponent,
    SearchFormComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
