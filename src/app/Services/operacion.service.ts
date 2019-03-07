import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Operacion } from '../Beans/Operacion';

@Injectable({
  providedIn: 'root'
})
export class OperacionService {

  constructor(private httpClient : HttpClient) { 
    console.log('OperacionService is working');
  }

  getData(){
    var url = 'http://10.161.36.174:8080/spring-rest-project-backend/operacionesPendientes';
    console.log("Get Operaciones pendientes: " + url)
    
    return this.httpClient.get<Operacion[]>(url);
  }
}
