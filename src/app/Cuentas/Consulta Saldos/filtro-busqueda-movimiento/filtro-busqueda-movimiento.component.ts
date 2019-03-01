import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-filtro-busqueda-movimiento',
  templateUrl: './filtro-busqueda-movimiento.component.html',
  styleUrls: ['./filtro-busqueda-movimiento.component.css']
})
export class FiltroBusquedaMovimientoComponent implements OnInit {
  tipoDocumento: String;
  numeroDocumento: String;
  numeroCuenta: String;
  fechaDesde: String;
  fechaHasta: String;
  
  constructor(private router: Router) { }

  buscarMovimientos(){
    this.router.navigate(["listado-movimientos-page",this.tipoDocumento]);
  }

  ngOnInit() {
  }

}
