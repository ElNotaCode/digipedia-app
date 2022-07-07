import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-digimon-search',
  templateUrl: './digimon-search.component.html',
  styleUrls: ['./digimon-search.component.css'],
})
export class DigimonSearchComponent implements OnInit {
  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe((params) => console.log(params));
  }

  ngOnInit(): void {}

  levels: string[] = [
    'Fresh',
    'In Training',
    'Rookie',
    'Champion',
    'Ultimate',
    'Mega',
    'Armor',
  ];

  search: string = '';

  buscarDigimon() {
    let searchStr = this.tratarDatos();
    console.log(searchStr);
    let esLevel = this.comprobarNivel(searchStr);
    console.log(esLevel);

    //reseteamos la variable search
    this.search = '';

    //Hacer peti correspondiente
    if (esLevel) {
    } else {
    }
  }

  tratarDatos(): string {
    //Tratar datos ya que la busqueda es case sensitive
    //Primera mayus las demás minus
    let searchStr =
      this.search.charAt(0).toUpperCase() + this.search.slice(1).toLowerCase();

    //En caso de que sea In Training
    if (searchStr.charAt(0) == 'I' && searchStr.charAt(2) == ' ') {
      searchStr = 'In Training';
    }

    return searchStr;
  }

  comprobarNivel(searchStr: string): boolean {
    //comprobar si es un nivel
    //Fresh, In Training, Rookie, Champion, Ultimate, Mega, Armor

    for (let i = 0; i < this.levels.length; i++) {
      if (this.levels[i] == searchStr) {
        return true;
      }
    }

    return false;
  }
}
