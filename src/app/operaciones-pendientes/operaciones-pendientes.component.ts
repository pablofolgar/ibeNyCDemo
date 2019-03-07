import { Component, OnInit, ViewChild } from '@angular/core';
import { Operacion } from '../Beans/Operacion';
import { MatPaginator, MatTableDataSource, MatSort } from '@angular/material';
import { OperacionService } from '../Services/operacion.service';

@Component({
  selector: 'app-operaciones-pendientes',
  templateUrl: './operaciones-pendientes.component.html',
  styleUrls: ['./operaciones-pendientes.component.css']
})
export class OperacionesPendientesComponent implements OnInit {

  displayedColumns: string[] = ['IdOPeracion', 'tipoOperacion', 'operacionEstado', 'cuentaOrigen', 'cuentaDestino', 'importe'];
  dataSource: any;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private operacionService: OperacionService) { }

  ngOnInit() {
    this.operacionService.getData()
    .subscribe(p => {
      console.log("Respuesta Servicio Operacion Service: " + p);
      this.dataSource = new MatTableDataSource<Operacion>(p);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

}
