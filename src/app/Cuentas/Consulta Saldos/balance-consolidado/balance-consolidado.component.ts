import { Component, OnInit, ViewChild } from '@angular/core';
import { CuentaService } from '../../../Services/cuenta.service';
import { MatPaginator, MatTableDataSource, MatSort } from '@angular/material';
//import { Person } from '../../../Beans/Person';
//import { Post } from '../../../Beans/Post';
import { Movimiento } from '../../../Beans/Movimiento';

@Component({
  selector: 'app-balance-consolidado',
  templateUrl: './balance-consolidado.component.html',
  styleUrls: ['./balance-consolidado.component.css']
})

export class BalanceConsolidadoComponent implements OnInit {
  //displayedColumns: string[] = ['userId', 'id', 'title', 'body'];
  //displayedColumns: string[] = ['id', 'firstName', 'lastName', 'email', 'mobile', 'dateOfBirth', 'passwd'];
  displayedColumns: string[] = ['breveDescripcionAcontecimiento', 'codigoAcontecimiento', 'importe', 'saldo'];
  dataSource: any;
  
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private cuentaService: CuentaService) {
    this.cuentaService.getData().subscribe(p => {
      console.log(p);
      //this.dataSource = new MatTableDataSource<Person>(p);
      //this.dataSource = new MatTableDataSource<Post>(p);
      this.dataSource = new MatTableDataSource<Movimiento>(p);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }


  ngOnInit() { }


}