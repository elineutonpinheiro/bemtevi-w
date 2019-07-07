import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';

export interface AlunoData {
  id: string;
  nome: string;
  turma: string;
  unidade: string;
  periodo: string;
  responsaveis: string;
}

/** Constants used to fill up our data base. */

/*------------------------------------------------------------------------------*/
/* É mais correto por uma tabela só ou criar um elemento para cada propriedade? */
/*------------------------------------------------------------------------------*/

const ALUNOS: string[] = [
  'Ana Clara Dias Monteiro', 'Bianca Assis de Oliveira', 'Caio Henrique Silva Bueno', 'Danilo de Lima Dedonno'
];

const TURMAS: string[] = [
  'A', 'B', 'C', 'D'
];

const UNIDADES: string[] = [
  'Escolhinha Feliz', 'Arco-Íris', 'Bela Escuela', 'Corujinha'
];

const PERIODO: string[] = [
  'Integral', 'Manhã', 'Tarde', 'Noite'
];

const RESPONSAVEIS: string[] = [
  '1', '2', '3', '4'
];

/**
 * @title Data table with sorting, pagination, and filtering.
*/

@Component({
  selector: 'app-list-alunos',
  templateUrl: './list-alunos.component.html',
  styleUrls: ['./list-alunos.component.css']
})
export class ListAlunosComponent implements OnInit {
  displayedColumns: string[] = ['nome', 'turma', 'unidade', 'periodo', 'responsaveis', 'acoes'];
  dataSource: MatTableDataSource<AlunoData>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  searchKey: string;

  constructor() {
    // Cria 20 unidades
    const alunos = Array.from({length: 20}, (_, k) => createNewAluno(k + 1));

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(alunos);
  }

  ngOnInit() {
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

}

/** Builds and returns a new Unidade. */
function createNewAluno(id: number): AlunoData {
  const alunos = ALUNOS[Math.round(Math.random() * (ALUNOS.length - 1))];

  return {
    id: id.toString(),
    nome: alunos,
    turma: TURMAS[Math.round(Math.random() * (TURMAS.length - 1))],
    unidade: UNIDADES[Math.round(Math.random() * (UNIDADES.length - 1))],
    periodo: PERIODO[Math.round(Math.random() * (PERIODO.length - 1))],
    responsaveis: RESPONSAVEIS[Math.round(Math.random() * (RESPONSAVEIS.length - 1))],
  };
}

