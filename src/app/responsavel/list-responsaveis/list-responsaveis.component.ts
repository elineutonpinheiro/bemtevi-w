import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';

export interface ResponsavelData {
  id: string;
  nome: string;
  alunos: string;
  contato: string;
  acesso: string;
}

/** Constants used to fill up our data base. */

/*------------------------------------------------------------------------------*/
/* É mais correto por uma tabela só ou criar um elemento para cada propriedade? */
/*------------------------------------------------------------------------------*/

const RESPONSAVEIS: string[] = [
  'Paula Dias Monteiro', 'Biatriz Assis de Oliveira', 'Caiã Henrique Silva Bueno', 'Lourdes de Lima Dedonno'
];

const ALUNOS: string[] = [
  'Ana Clara Dias Monteiro', 'Bianca Assis de Oliveira', 'Caio Henrique Silva Bueno', 'Danilo de Lima Dedonno'
];

const CONTATOS: string[] = [
  '(95) 99112 0101', '(95) 99112 0000', '(95) 99189 2212', '(95) 99110 4034'
];

const ACESSO: string[] = [
  '12h45min', '13h34min', '19h30min', '22h40min'
];

/**
 * @title Data table with sorting, pagination, and filtering.
*/

@Component({
  selector: 'app-list-responsaveis',
  templateUrl: './list-responsaveis.component.html',
  styleUrls: ['./list-responsaveis.component.css']
})
export class ListResponsaveisComponent implements OnInit {

  displayedColumns: string[] = ['nome', 'alunos', 'contato', 'acoes'];
  dataSource: MatTableDataSource<ResponsavelData>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  searchKey: string;

  constructor() {
    // Cria 20 unidades
    const responsaveis = Array.from({length: 20}, (_, k) => createNewResponsavel(k + 1));

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(responsaveis);
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
function createNewResponsavel(id: number): ResponsavelData {
  const responsaveis = RESPONSAVEIS[Math.round(Math.random() * (RESPONSAVEIS.length - 1))];

  return {
    id: id.toString(),
    nome: responsaveis,
    alunos: ALUNOS[Math.round(Math.random() * (ALUNOS.length - 1))],
    contato: CONTATOS[Math.round(Math.random() * (CONTATOS.length - 1))],
    acesso: ACESSO[Math.round(Math.random() * (ACESSO.length - 1))]
  };
}
