import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Post } from '../Beans/Post';
import { Person } from '../Beans/Person';

@Injectable({
  providedIn: 'root'
})

export class CuentaService {

  constructor(private httpClient : HttpClient) { 
    console.log('CuentaService is working');
  }

  getData(){
    return this.httpClient.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
    //return this.httpClient.get<Person[]>('http://10.161.1.135:8080/spring-rest-project-backend/persons/');
  }
}
