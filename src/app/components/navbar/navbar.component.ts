import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  search: string = '';

  levels: string[] = [
    'Fresh',
    'In Training',
    'Rookie',
    'Champion',
    'Ultimate',
    'Mega',
    'Armor',
  ];

  buscarDigimon() {
    let searchStr = this.tratarDatos();

    let esLevel = this.comprobarNivel(searchStr);

    //Ir a la ruta correspondiente
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
    if (searchStr.charAt(2) == ' ') {
      searchStr.charAt(3).toUpperCase;
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
