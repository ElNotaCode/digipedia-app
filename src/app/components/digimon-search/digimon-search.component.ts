import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DigimonService } from 'src/app/_services/digimon.service';

@Component({
  selector: 'app-digimon-search',
  templateUrl: './digimon-search.component.html',
  styleUrls: ['./digimon-search.component.css'],
})
export class DigimonSearchComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private digimonService: DigimonService
  ) {
    this.route.params.subscribe((params) => (this.search = params['search']));
  }

  ngOnInit(): void {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.buscarDigimon();
  }

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

  digimons: any = '';

  buscarDigimon() {
    let searchStr = this.tratarDatos();
    console.log(searchStr);
    let esLevel = this.comprobarNivel(searchStr);
    console.log(esLevel);

    //Hacer peti correspondiente
    if (esLevel) {
      //buscaremos por nivel
      this.digimonService
        .getDigimonByLevel(searchStr)
        .subscribe((result) => (this.digimons = result));
    } else {
      //buscaremos por nombre
      this.digimonService
        .getDigimonByName(searchStr)
        .subscribe((result) => (this.digimons = result));
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
