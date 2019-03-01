/*
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  msg(){
    alert('Hello World')
  }
  ngOnInit() {
  }

}
*/
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
selector: 'app-login',
templateUrl: './login.component.html',
styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }
  username: string;
  password: string;
  
  ngOnInit() {}
  
  login() : void 
  {
    console.log("Login")
    if(this.username == 'admin' && this.password == 'admin')
    {
      this.router.navigate(["movimientos"]);
    }
    else 
    {
      alert("Credenciales inválidas");
    }
  }
}


