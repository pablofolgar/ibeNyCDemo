import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BalanceConsolidadoComponent } from './Cuentas/Consulta Saldos/balance-consolidado/balance-consolidado.component';
import { CuentaService } from './Services/cuenta.service';

import { HttpClientModule } from '@angular/common/http';
import {MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule, MatSortModule, MatToolbar, MatToolbarModule, MatFormFieldModule, MatCardModule } from '@angular/material';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './material/material.module';
import { NavegacionModule } from './navegacion/navegacion.module';
import { MenuPrincipalComponent } from './menu-principal/menu-principal.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ErrorComponent } from './error/error.component';
import { FiltroBusquedaMovimientoComponent } from './Cuentas/Consulta Saldos/filtro-busqueda-movimiento/filtro-busqueda-movimiento.component';
import { OperacionesPendientesComponent } from './operaciones-pendientes/operaciones-pendientes.component';

@NgModule({
  declarations: [
    AppComponent,
    BalanceConsolidadoComponent,
    LoginComponent,
    MenuPrincipalComponent,
    HomePageComponent,
    ErrorComponent,
    FiltroBusquedaMovimientoComponent,
    OperacionesPendientesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatCardModule,
    FormsModule, 
    MaterialModule,
    NavegacionModule
  ],

  providers: [CuentaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
