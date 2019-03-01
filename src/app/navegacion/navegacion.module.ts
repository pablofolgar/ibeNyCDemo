/*import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class NavegacionModule { }
*/
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { RouterModule, Routes } from "@angular/router";

import { LoginComponent } from "../login/login.component";

import {BalanceConsolidadoComponent} from "../Cuentas/Consulta Saldos/balance-consolidado/balance-consolidado.component"
import { MenuPrincipalComponent } from '../menu-principal/menu-principal.component';
import { HomePageComponent } from '../home-page/home-page.component';
import { ErrorComponent } from '../error/error.component';
import { FiltroBusquedaMovimientoComponent } from '../Cuentas/Consulta Saldos/filtro-busqueda-movimiento/filtro-busqueda-movimiento.component';

const reglasDeNavegacion: Routes = [
  {
    path: "", component: MenuPrincipalComponent,
    children: [
      { path: "home-page", component: HomePageComponent},
      { path: "listado-movimientos-page/:tipoDocumento", component: BalanceConsolidadoComponent },
      { path: "filtro-movimiento-page", component: FiltroBusquedaMovimientoComponent },
      { path: "error-page", component: ErrorComponent},
      { path: "", redirectTo: "/login", pathMatch: 'full' }
    ]
  },
    
  { path: "login", component: LoginComponent },
  { path: "**", component: ErrorComponent }
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(reglasDeNavegacion, { enableTracing: true }) ],
  exports: [RouterModule]
})
export class NavegacionModule {}
