import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//import { Post } from '../Beans/Post';
//import { Person } from '../Beans/Person';
import {Movimiento} from '../Beans/Movimiento'
@Injectable({
  providedIn: 'root'
})

export class CuentaService {

  constructor(private httpClient : HttpClient) { 
    console.log('CuentaService is working');
  }

  getData(){
    //return this.httpClient.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
    //return this.httpClient.get<Person[]>('http://10.161.36.174:8080/spring-rest-project-backend/persons/');
    return this.httpClient.get<Movimiento[]>('http://10.161.36.174:8080/spring-rest-project-backend/movimientos?tipoDoc=3&nroDoc=27111437&nroCta=03200281008&fechaDesde=2019-01-01&fechaHasta=2019-02-01');
  }
}
