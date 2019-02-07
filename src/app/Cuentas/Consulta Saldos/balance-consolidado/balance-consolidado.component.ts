import { Component, OnInit, ViewChild } from '@angular/core';
import { CuentaService } from '../../../Services/cuenta.service';
import { MatPaginator, MatTableDataSource, MatSort } from '@angular/material';
import { Post } from '../../../Beans/Post';

@Component({
  selector: 'app-balance-consolidado',
  templateUrl: './balance-consolidado.component.html',
  styleUrls: ['./balance-consolidado.component.css']
})

export class BalanceConsolidadoComponent implements OnInit {
  displayedColumns: string[] = ['userId', 'id', 'title', 'body'];
  dataSource: any;
  
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private cuentaService: CuentaService) {
    this.cuentaService.getData().subscribe(cuenta => {

      this.dataSource = new MatTableDataSource<Post>(cuenta);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }


  ngOnInit() { }


}