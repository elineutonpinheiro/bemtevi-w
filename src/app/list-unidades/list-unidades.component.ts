import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

export interface UnidadeData {
  id: string;
  nome: string;
  endereco: string;
  contato: string;
  status: string;
}

/** Constants used to fill up our data base. */

/*------------------------------------------------------------------------------*/
/* É mais correto por uma tabela só ou criar um elemento para cada propriedade? */
/*------------------------------------------------------------------------------*/

const CONTATOS: string[] = [
  '95991118293', '95991017195', '95991010110', '95981103320'
];
const NOMES: string[] = [
  'São José', 'Vovó Francisca da Silva Magalhães', 'Vovó Ataíde', 'Vanda Pinto'
];

const ENDERECOS: string[] = [
  'Av. Adão', 'Av. Eva', 'Rua Cain', 'Rua Abel'
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
  displayedColumns: string[] = ['id', 'nome', 'atualizadaEm', 'status', 'acoes'];
  dataSource: MatTableDataSource<UnidadeData>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  searchKey: string;

  constructor() {
    // Cria 30 unidades
    const unidades = Array.from({length: 30}, (_, k) => createNewUnidades(k + 1));

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
function createNewUnidades(id: number): UnidadeData {
  const nome = NOMES[Math.round(Math.random() * (NOMES.length - 1))];

  return {
    id: id.toString(),
    nome: nome,
    endereco: ENDERECOS[Math.round(Math.random() * (ENDERECOS.length - 1))],
    contato: CONTATOS[Math.round(Math.random() * (CONTATOS.length - 1))],
    status: status
  };
}



