import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Unidade } from './../../models/unidade.models';
import { UnidadeService } from '../../services/unidade.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-list-unidades',
  templateUrl: './list-unidades.component.html',
  styleUrls: ['./list-unidades.component.css']
})
export class ListUnidadesComponent implements OnInit {
  displayedColumns: string[] = ['nome', 'endereco', 'cidade', 'telefone', 'email', 'status', 'acoes'];
  dataSource = new MatTableDataSource<Unidade>();

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  searchKey: string;
  unidade: Unidade;

  constructor(private unidadeService: UnidadeService, private router: Router){
   }

  ngOnInit() {
    this.getUnidades();
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  onSearchClear() {
    this.searchKey = "";
    this.applyFilter(this.searchKey);
  }

  getUnidades() {
    this.unidadeService.listarUnidadesPorInstituicaoId(1)
    .subscribe(dados => {
      this.dataSource.data = dados;
      console.log(dados);
    });
  }

}

