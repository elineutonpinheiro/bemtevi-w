import { InstituicaoService } from './../../services/instituicao.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { Aluno } from 'src/app/models/aluno.models';
import { AlunoService } from 'src/app/services/aluno.service';

@Component({
  selector: 'app-lista-instituicoes',
  templateUrl: './lista-instituicoes.component.html',
  styleUrls: ['./lista-instituicoes.component.css']
})
export class ListaInstituicoesComponent implements OnInit {

  displayedColumns: string[] = ['nome', 'status', 'acoes'];
  dataSource = new MatTableDataSource<Aluno>();

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  searchKey: string;

  constructor(private instituicaoService: InstituicaoService) {

  }

  ngOnInit() {
   this.getAlunos();
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

  getAlunos() {
    this.instituicaoService.getInstituicoes()
    .subscribe(dados => {
      this.dataSource.data = dados;
      console.log(dados);
    });
  }

}
