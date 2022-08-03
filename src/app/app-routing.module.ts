import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DigimonListComponent } from './components/digimon-list/digimon-list.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  //TODO: Home
  { path: '', component: HomeComponent },
  //Lista de todos los digimon
  { path: 'digimon-list', component: DigimonListComponent },
  //wildcard route, si ponen un path inventado les redirigirá aquí ¡IMPORTANTE! poner al final
  //TODO: 404
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
