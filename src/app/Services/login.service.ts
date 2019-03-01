import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginResult } from '../Beans/LoginResult';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient : HttpClient) { 
    console.log('Login service is working');
  }

  login(username : String, password : String){
    var url = 'http://10.161.36.174:8080/spring-rest-project-backend/login?username='+username+'&password='+password;
    console.log("Calling: " + url)
    return this.httpClient.get<LoginResult>(url);
    
    /*
    //HARDCODEEEEEEEEEEEEEEEEEEEEEEEEEE
    let res = new LoginResultImpl(true);
    return res ;
 */
  }
}

/*
*/
class LoginResultImpl implements LoginResult{
  result: boolean;
  constructor(result: boolean){
    this.result = result;
  }
}
