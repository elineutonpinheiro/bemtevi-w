import { Aluno } from './../../models/aluno.models';
import { AlunoService } from './../../services/aluno.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';

@Component({
  selector: 'app-list-alunos',
  templateUrl: './list-alunos.component.html',
  styleUrls: ['./list-alunos.component.css']
})
export class ListAlunosComponent implements OnInit {
  displayedColumns: string[] = ['nome', 'dataNascimento', 'responsavel', 'status', 'acoes'];
  dataSource = new MatTableDataSource<Aluno>();

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  searchKey: string;

  constructor(private alunoService: AlunoService) {

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
    this.alunoService.listarAlunosPorInstituicaoId(1)
    .subscribe(dados => {
      this.dataSource.data = dados;
      console.log(dados);
    });
  }

}

