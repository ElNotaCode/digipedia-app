import { Component, OnInit } from '@angular/core';
import { DigimonService } from 'src/app/services/digimon.service';

/**
 * @Author Eloi Martorell Martín
 */

@Component({
  selector: 'app-digimon-list',
  templateUrl: './digimon-list.component.html',
})
export class DigimonListComponent implements OnInit {
  //declaramos en el constructor el servicio, se nos importará el componente automaticamente
  constructor(private digimonService: DigimonService) {}

  //declaramos la variable tipo any donde guardaremos los digimons
  digimons: any = null;

  //al iniciarse el componente hace la petición
  ngOnInit(): void {
    //asignaremos el resultado a la variable que hemos declarado antes
    this.digimonService
      .listDigimon()
      .subscribe((responseData) => (this.digimons = responseData));
  }
}
