import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';

export interface TurmaData {
  id: string;
  turma: string;
  unidade: string;
  sala: string;
  alunos: string;
  profissionais: string;
}

/** Constants used to fill up our data base. */

/*------------------------------------------------------------------------------*/
/* É mais correto por uma tabela só ou criar um elemento para cada propriedade? */
/*------------------------------------------------------------------------------*/

const UNIDADES: string[] = [
  'Escolhinha Feliz', 'Arco-Íris', 'Bela Escuela', 'Corujinha'
];

const TURMAS: string[] = [
  '1', '2', '3', '4'
];

const SALA: string[] = [
  '12', '14', '7', '8'
];

const ALUNOS: string[] = [
  '10', '20', '30', '40'
];

const PROFISSIONAIS: string[] = [
  '2', '1', '3', '5'
];

/**
 * @title Data table with sorting, pagination, and filtering.
*/


@Component({
  selector: 'app-list-turmas',
  templateUrl: './list-turmas.component.html',
  styleUrls: ['./list-turmas.component.css']
})
export class ListTurmasComponent implements OnInit {
  displayedColumns: string[] = ['turma', 'unidade', 'sala', 'alunos', 'profissionais', 'acoes'];
  dataSource: MatTableDataSource<TurmaData>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  searchKey: string;

  constructor() {
    // Cria 20 unidades
    const turmas = Array.from({length: 20}, (_, k) => createNewTurma(k + 1));

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(turmas);
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
function createNewTurma(id: number): TurmaData {
  const turmas = TURMAS[Math.round(Math.random() * (TURMAS.length - 1))];

  return {
    id: id.toString(),
    turma: turmas,
    unidade: UNIDADES[Math.round(Math.random() * (UNIDADES.length - 1))],
    sala: SALA[Math.round(Math.random() * (SALA.length - 1))],
    alunos: ALUNOS[Math.round(Math.random() * (ALUNOS.length - 1))],
    profissionais: PROFISSIONAIS[Math.round(Math.random() * (PROFISSIONAIS.length - 1))]
  };
}
