import { TurmaService } from './../../services/turma.service';
import { Turma } from './../../models/turma.models';
import { Matricula } from './../../models/matricula.models';
import { ResponsavelService } from './../../services/responsavel.service';
import { AlunoService } from './../../services/aluno.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Aluno } from 'src/app/models/aluno.models';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { Responsavel } from 'src/app/models/responsavel.models';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
  selector: 'app-add-alunos',
  templateUrl: './add-alunos.component.html',
  styleUrls: ['./add-alunos.component.css']
})
export class AddAlunosComponent implements OnInit {

  displayedColumns: string[] = ['nome'];
  dataSource = new MatTableDataSource<Responsavel>();
  selection = new SelectionModel<Responsavel>(true, []);

  form: FormGroup;
  alunos: Aluno[];
  responsaveis: Responsavel[];
  responsavel: Responsavel;
  matricula: Matricula;
  turmas: Turma[];

  selectRowIndex: any;

  hide = true;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  searchKey: string;

  constructor(
    private alunoService: AlunoService,
    private responsavelService: ResponsavelService,
    private turmaService: TurmaService,
    private auth: AuthService,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.createForm();
  }

  ngOnInit() {
    this.listarResponsaveis();
    this.listarTurmas();
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

  onRowClicked(row) {
    this.selectRowIndex = row.id;
    //console.log('Row clicked: ', row);
    this.responsavelService.getResponsavelPorId(row.id).
      subscribe(response => {
        this.responsavel = response;
      }, error => { });
  }

  //Troca a cor do botão quando o input está válido
  validaStyleButtonSalvar() {
    if (this.form.valid) {
      return {
        'background': '#ffc906',
        'color': '#fff',
        'border': '1px solid #ffc906'
      };
    }
  }

  createForm() {
    this.form = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(3)]],
      dataNascimento: ['', [Validators.required]],
      turmaId: ['', [Validators.required]],
      ativo: [true]
    });
  }

  onSubmit() {
    this.salvarMatricula();
    this.gotoList();
  }

  gotoList() {
    this.alunoService.listarAlunosPorInstituicaoId(1);
    this.router.navigate(['/alunos']);
  }

  salvarMatricula() {
    const aluno = new Aluno(null, this.form.controls.nome.value, this.form.controls.dataNascimento.value, this.responsavel,
      this.form.controls.ativo.value);
    const turma = this.form.value.turmaId;
    const matricula = new Matricula(aluno, turma, null);
    this.alunoService.inserir(matricula)
      .subscribe(data => {
        this.matricula = data;
        console.log(this.matricula);
      }, error => {
        console.log(error);
      });
  }

  listarResponsaveis() {
    this.responsavelService.getResponsaveis()
      .subscribe(dados => {
        this.dataSource.data = dados;
        console.log(dados);
      });
  }

  listarTurmas() {
    this.turmaService.getTurmas().
      subscribe(response => {
        this.turmas = response;
        this.form.controls.turmaId.setValue(this.turmas[0].id);
      }, error => { });
  }
}
