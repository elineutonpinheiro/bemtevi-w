import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

export interface UnidadeData {
  id: string;
  nome: string;
  turmas: string;
  profissionais: string;
  alunos: string;
  responsaveis: string;
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

const PROFISSIONAIS: string[] = [
  '1', '2', '3', '4'
];

const ALUNOS: string[] = [
  '10', '20', '30', '40'
];

const RESPONSAVEIS: string[] = [
  '10', '20', '30', '40'
];

/**
 * @title Data table with sorting, pagination, and filtering.
*/

@Component({
  selector: 'app-list-unidades',
  templateUrl: './list-unidades.component.html',
  styleUrls: ['./list-unidades.component.css']
})
export class ListUnidadesComponent implements OnInit {
  displayedColumns: string[] = ['nome', 'turmas', 'profissionais', 'alunos', 'responsaveis', 'acoes'];
  dataSource: MatTableDataSource<UnidadeData>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  searchKey: string;

  constructor() {
    // Cria 20 unidades
    const unidades = Array.from({length: 20}, (_, k) => createNewUnidade(k + 1));

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(unidades);
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
function createNewUnidade(id: number): UnidadeData {
  const unidades = UNIDADES[Math.round(Math.random() * (UNIDADES.length - 1))];

  return {
    id: id.toString(),
    nome: unidades,
    turmas: TURMAS[Math.round(Math.random() * (TURMAS.length - 1))],
    profissionais: PROFISSIONAIS[Math.round(Math.random() * (PROFISSIONAIS.length - 1))],
    alunos: ALUNOS[Math.round(Math.random() * (ALUNOS.length - 1))],
    responsaveis: RESPONSAVEIS[Math.round(Math.random() * (RESPONSAVEIS.length - 1))]
  };
}



