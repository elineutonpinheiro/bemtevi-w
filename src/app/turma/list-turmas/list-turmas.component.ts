import { TurmaService } from './../../services/turma.service';
import { Turma } from './../../models/turma.models';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';

@Component({
  selector: 'app-list-turmas',
  templateUrl: './list-turmas.component.html',
  styleUrls: ['./list-turmas.component.css']
})
export class ListTurmasComponent implements OnInit {
  displayedColumns: string[] = ['turma', 'unidade', 'periodo', 'sala', 'anoLetivo', 'status', 'acoes'];
  dataSource = new MatTableDataSource<Turma>();

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  searchKey: string;
  turma: Turma;

  constructor(private turmaService: TurmaService) {
  }

  ngOnInit() {
    this.getTurmas();
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

  getTurmas() {
    this.turmaService.getTurmas()
    .subscribe(dados => {
      this.dataSource.data = dados;
      console.log(dados);
    });
  }

}

