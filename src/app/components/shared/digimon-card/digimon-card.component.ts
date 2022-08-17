import { Component, Input, OnInit } from '@angular/core';
import { Digimon } from 'src/app/models/digimon';

@Component({
  selector: 'app-digimon-card',
  templateUrl: './digimon-card.component.html',
  styleUrls: ['./digimon-card.component.css'],
})
export class DigimonCardComponent implements OnInit {
  constructor() {}

  //esta variable tiene el digimon que se ha pasado actualmente desde el componente padre
  @Input() digimon: Digimon | undefined;

  ngOnInit(): void {}
}
