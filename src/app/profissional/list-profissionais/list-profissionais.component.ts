import { ProfissionalService } from './../../services/profissional.service';
import { Profissional } from './../../models/profissional.models';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-list-profissionais',
  templateUrl: './list-profissionais.component.html',
  styleUrls: ['./list-profissionais.component.css']
})
export class ListProfissionaisComponent implements OnInit {
  displayedColumns: string[] = ['nome', 'cargo', 'status', 'acoes'];
  dataSource = new MatTableDataSource<Profissional>();

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  searchKey: string;
  profissional: Profissional;

  constructor(private profissionalService: ProfissionalService) {

  }

  ngOnInit() {
    this.getProfissionais();
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

  getProfissionais() {
    this.profissionalService.listarProfissionaisPorInstituicaoId(1)
    .subscribe(dados => {
      this.dataSource.data = dados;
      console.log(dados);
    });
  }

}



