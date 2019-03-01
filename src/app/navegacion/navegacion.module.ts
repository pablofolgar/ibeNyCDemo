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

const reglasDeNavegacion: Routes = [
  { path: "", component: LoginComponent  },
  { path: "login", component: LoginComponent },
  { path: "movimientos", component: BalanceConsolidadoComponent },
  { path: "**", component: LoginComponent }
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(reglasDeNavegacion, { enableTracing: true }) ],
  exports: [RouterModule]
})
export class NavegacionModule {}
