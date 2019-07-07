import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';

export interface ProfissionalData {
  id: string;
  nome: string;
  cargo: string;
  unidades: string;
  turmas: string;
  acesso: string;
}

/** Constants used to fill up our data base. */

/*------------------------------------------------------------------------------*/
/* É mais correto por uma tabela só ou criar um elemento para cada propriedade? */
/*------------------------------------------------------------------------------*/

const PROFISSIONAIS: string[] = [
  'Suzete Laura', 'João Batista', 'Tereza Duarte', 'Helena Vascos'
];

const CARGOS: string[] = [
  '1', '2', '3', '4'
];

const UNIDADES: string[] = [
  '12', '14', '7', '8'
];

const TURMAS: string[] = [
  '10', '20', '30', '40'
];

const ACESSO: string[] = [
  '12h30min', '07h40min', '14h43min', '17h20min'
];

/**
 * @title Data table with sorting, pagination, and filtering.
*/


@Component({
  selector: 'app-list-profissionais',
  templateUrl: './list-profissionais.component.html',
  styleUrls: ['./list-profissionais.component.css']
})
export class ListProfissionaisComponent implements OnInit {
  displayedColumns: string[] = ['nome', 'cargo', 'unidades', 'turmas', 'acesso', 'acoes'];
  dataSource: MatTableDataSource<ProfissionalData>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  searchKey: string;

  constructor() {
    // Cria 20 unidades
    const turmas = Array.from({length: 20}, (_, k) => createNewProfissional(k + 1));

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
function createNewProfissional(id: number): ProfissionalData {
  const profissionais = PROFISSIONAIS[Math.round(Math.random() * (PROFISSIONAIS.length - 1))];

  return {
    id: id.toString(),
    nome: profissionais,
    cargo: CARGOS[Math.round(Math.random() * (UNIDADES.length - 1))],
    unidades: UNIDADES[Math.round(Math.random() * (UNIDADES.length - 1))],
    turmas: TURMAS[Math.round(Math.random() * (TURMAS.length - 1))],
    acesso: ACESSO[Math.round(Math.random() * (ACESSO.length - 1))]
  };
}
