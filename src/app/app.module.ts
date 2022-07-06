import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DigimonCardComponent } from './components/digimon-card/digimon-card.component';
import { DigimonListComponent } from './components/digimon-list/digimon-list.component';

@NgModule({
  declarations: [AppComponent, DigimonCardComponent, DigimonListComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
