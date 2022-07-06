import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DigimonListComponent } from './components/digimon-list/digimon-list.component';

const routes: Routes = [
  //wildcard route, si ponen un path inventado les redirigirá aquí
  //TODO: 404
  { path: '**', component: DigimonListComponent },
  //TODO: Home
  { path: '', component: DigimonListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
