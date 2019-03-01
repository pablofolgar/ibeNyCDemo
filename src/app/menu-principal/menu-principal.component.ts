import { Component, OnInit } from "@angular/core";
import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Component({
  selector: "app-menu-principal",
  templateUrl: "./menu-principal.component.html",
  styleUrls: ["./menu-principal.component.css"]
})
export class MenuPrincipalComponent implements OnInit {
  public tituloAplicacion: String;

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(map(result => result.matches));

  constructor(private breakpointObserver: BreakpointObserver) {}
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.tituloAplicacion = "Itau Bankline Empresas";
  }
}
