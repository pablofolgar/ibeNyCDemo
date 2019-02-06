import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BalanceConsolidadoComponent } from './Cuentas/Consulta Saldos/balance-consolidado/balance-consolidado.component';
import { CuentaService } from './Services/cuenta.service';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    BalanceConsolidadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [CuentaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
