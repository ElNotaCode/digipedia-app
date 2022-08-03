import { Component, OnInit } from '@angular/core';
import { DigimonService } from 'src/app/services/digimon.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  //declaramos el servicio
  constructor(private digimonService: DigimonService) {}

  //declaramos la variable tipo any donde guardaremos los digimons
  digimons: any = null;

  //al iniciarse el componente hace la petición
  ngOnInit(): void {
    //asignaremos el resultado a la variable que hemos declarado antes
    this.digimonService
      .getDigimonByName('Agumon')
      .subscribe(
        (responseData) => (
          (this.digimons = responseData), console.log(this.digimons)
        )
      );
  }
}
