import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../Services/login.service';
import { LoginResult } from '../Beans/LoginResult';

@Component({
selector: 'app-login',
templateUrl: './login.component.html',
styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router,private loginService: LoginService) { }
  username: string;
  password: string;
  
  ngOnInit() {}
  
  login() : void 
  {
      this.loginService.login(this.username,this.password)
        .subscribe(p => {
            console.log("Respuesta: " + p);
            if(p.result){
              this.router.navigate(["movimientos"]);
            }else{
              alert("Credenciales inválidas");
            }
        });
  }
}


