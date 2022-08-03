import { Injectable } from '@angular/core';
//Importamos los modulos que vamos a necesitar
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, Observable } from 'rxjs';

/**
 * @Author Eloi Martorell Martín
 */

//declaramos la url como una constante string
const URL: string = 'https://digimon-api.vercel.app/api/digimon';

@Injectable({
  providedIn: 'root',
})
export class DigimonService {
  //declaramos en el parametro del constructor un objeto HttpClient
  constructor(private httpClient: HttpClient) {}

  //función tipo observable que va a hacer un list de todos los digimon
  listDigimon(): Observable<any> {
    //devolveremos un get de la URL
    return this.httpClient.get(URL);
  }

  //función del tipo obsevable que va a hacer get by name, le pasamos una string por parametro
  getDigimonByName(name: string): Observable<any> {
    return this.httpClient.get(`${URL}/name/${name}`);
  }

  //get by level
  //función del tipo obsevable que va a hacer get by name, le pasamos una string por parametro
  getDigimonByLevel(level: string): Observable<any> {
    return this.httpClient.get(`${URL}/level/${level}`);
  }
}
