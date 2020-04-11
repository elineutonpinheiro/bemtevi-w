import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Unidade } from './../../models/unidade.models';
import { UnidadeService } from '../../services/unidade.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-list-unidades',
  templateUrl: './list-unidades.component.html',
  styleUrls: ['./list-unidades.component.css']
})
export class ListUnidadesComponent implements OnInit {
  displayedColumns: string[] = ['nome', 'endereco', 'cidade', 'telefone', 'email', 'status', 'acoes'];
  dataSource = new MatTableDataSource<Unidade>();

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  searchKey: string;
  unidade: Unidade;
  idClicado: number;

  constructor(private unidadeService: UnidadeService, private router: Router){
   }

  ngOnInit() {
    //this.getAllOwners();
    this.getUnidades();
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

  getUnidades() {
    this.unidadeService.listarUnidadesPorInstituicaoId(1)
    .subscribe(dados => {
      this.dataSource.data = dados;
      console.log(dados);
    });
  }

  /* viewUnidade(id: number){
    this.unidadeService.getUnidadeById(id)
    .subscribe(
      dados => {
        console.log(dados);
        console.log('Unidade Selecionada com Sucesso!');
        //this.router.navigate(['/unidades/' + id]);
      },
      error => console.log(error));

  this.unidadeService.getUnidadeById(id)
    .subscribe( dados => {
      this.unidade = dados;
      console.log(this.unidade);
    });

  } */



}

/* -------------------------------------------------------
    Ao criar a primeira Unidade, a lista não é atualizada.
    Apenas quando após a segunda que fica atualizando
   ------------------------------------------------------- */

  /*  //unidade: Unidade;
  dataSource =  UnidadeDataSource;
  displayedColumns: string[] = ['nome', 'turmas', 'alunos', 'profissionais', 'status', 'acoes'];
  //dataSource: MatTableDataSource<Unidade>;

  //unidades: Observable<Unidade[]>;

  //unidade: Unidade;

   @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  //@ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  //@ViewChild(MatSort, {static: true}) sort: MatSort;

  //searchKey: string;

  constructor(private unidadeService: UnidadeService, private router: ActivatedRoute) {
      //this.dataSource = new MatTableDataSource();

  }

  ngOnInit() {
    //this.dataSource.paginator = this.paginator;
    //this.dataSource.sort = this.sort;
    this.unidade = this.router.snapshot.data["unidade"];
    this.dataSource = new UnidadeDataSource(this.unidadeService);
    //this.dataSource.loadUnidades(this.unidade.id, '', 'asc', 0, 3);
    //this.getUnidades();
  } */

  /* ngAfterViewInit() {
    this.paginator.page
      .pipe(
          tap(() => this.loadUnidadePage())
      )
      .subscribe();
  }

  loadUnidadePage() {
    this.dataSource.loadUnidades(
      this.unidade.id,
      '',
      'asc',
      this.paginator.pageIndex,
      this.paginator.pageSize);
  } */

  /* applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  } */

  /* onSearchClear() {
    this.searchKey = "";
    this.applyFilter(this.searchKey);
  } */

  /* reloadData() {
    this.unidades = this.unidadeService.getUnidades();
  }

  deleteUnidade(id: number) {
    this.unidadeService.deleteUnidade(id)
      .subscribe(
        data => {
          console.log(data);
          console.log('Unidade Excluida com Sucesso!');
          this.getUnidades();
        },
        error => console.log(error));
  } */

  /* editUnidade(unidade: Unidade): void{
    localStorage.removeItem('editUnidadeId');
    localStorage.setItem('editUnidadeId', unidade.id.toString());
    this.router.navigate(['edit-unidade']);
  } */

  /* getUnidades(): any {
   return this.unidadeService.getUnidades()
   .subscribe(dados => this.dataSource = new MatTableDataSource(dados));
  } */


