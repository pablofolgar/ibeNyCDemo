import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { CuentaService } from '../../../Services/cuenta.service';
import { MatPaginator, MatTableDataSource, MatSort } from '@angular/material';
import { ActivatedRoute, Router, ParamMap } from '@angular/router'
import { switchMap } from 'rxjs/operators'
//import { Person } from '../../../Beans/Person';
//import { Post } from '../../../Beans/Post';
import { Movimiento } from '../../../Beans/Movimiento';
import { Observable } from 'rxjs';

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
  constructor(private cuentaService: CuentaService,
              private route: ActivatedRoute,
              private router: Router) { }

  moves: Observable<Movimiento[]>;
  //http://10.161.36.174:8080/spring-rest-project-backend/movimientos?tipoDoc=3&nroDoc=27111437&nroCta=03200281008&fechaDesde=2019-01-01&fechaHasta=2019-02-01';
  ngOnInit() { 
      this.moves = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => 
          this.cuentaService.getData(params.get('tipoDocumento'),params.get('numeroDocumento'),params.get('numeroCuenta'),params.get('fechaDesde'),params.get('fechaHasta'))
      ));

      this.moves.subscribe(p => {
        console.log(p);
        //this.dataSource = new MatTableDataSource<Person>(p);
        //this.dataSource = new MatTableDataSource<Post>(p);
        this.dataSource = new MatTableDataSource<Movimiento>(p);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
  }
}