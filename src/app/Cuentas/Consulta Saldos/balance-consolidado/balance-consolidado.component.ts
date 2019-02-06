import { Component, OnInit } from '@angular/core';
import { CuentaService } from '../../../Services/cuenta.service';

@Component({
  selector: 'app-balance-consolidado',
  templateUrl: './balance-consolidado.component.html',
  styleUrls: ['./balance-consolidado.component.css']
})
export class BalanceConsolidadoComponent implements OnInit {
  posts = [];
  constructor(private cuentaService : CuentaService){
    this.cuentaService.getData().subscribe(cuenta => {
      this.posts = cuenta;
    });
  }

  ngOnInit() {
  }

}
