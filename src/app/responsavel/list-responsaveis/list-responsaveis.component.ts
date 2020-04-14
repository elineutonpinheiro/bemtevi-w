import { ResponsavelService } from './../../services/responsavel.service';
import { Responsavel } from './../../models/responsavel.models';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';

@Component({
  selector: 'app-list-responsaveis',
  templateUrl: './list-responsaveis.component.html',
  styleUrls: ['./list-responsaveis.component.css']
})
export class ListResponsaveisComponent implements OnInit {

  displayedColumns: string[] = ['nome', 'parentesco', 'qtdeMatriculas', 'status', 'acoes'];
  dataSource = new MatTableDataSource<Responsavel>();

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  searchKey: string;

  constructor(private responsavelService: ResponsavelService) {

  }

  ngOnInit() {
    this.getResponsaveis();
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

  getResponsaveis() {
    this.responsavelService.listarResponsaveisPorInstituicaoId(1)
    .subscribe(dados => {
      this.dataSource.data = dados;
      console.log(dados);
    });
  }


}

