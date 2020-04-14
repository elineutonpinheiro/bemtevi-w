import { Matricula } from './../../models/matricula.models';
import { ResponsavelService } from './../../services/responsavel.service';
import { AlunoService } from './../../services/aluno.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Aluno } from 'src/app/models/aluno.models';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { Responsavel } from 'src/app/models/responsavel.models';
import { MatTableDataSource } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
  selector: 'app-add-alunos',
  templateUrl: './add-alunos.component.html',
  styleUrls: ['./add-alunos.component.css']
})
export class AddAlunosComponent implements OnInit {

  displayedColumns: string[] = ['id', 'nome'];
  dataSource = new MatTableDataSource<Responsavel>();
  selection = new SelectionModel<Responsavel>(true, []);

  form: FormGroup;
  alunos: Aluno[];
  responsaveis: Responsavel[];
  responsavel: Responsavel;
  matricula: Matricula;

  hide = true;

  constructor(
    private alunoService: AlunoService,
    private responsavelService: ResponsavelService,
    private auth: AuthService,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.createForm();
  }

  ngOnInit() {
    this.listarResponsaveis();
  }

  onRowClicked(row) {
    //console.log('Row clicked: ', row);
    this.responsavelService.getResponsavelPorId(row.id).
      subscribe(response => {
        this.responsavel = response;
        console.log(this.responsavel);
      }, error => { });
  }

  //Troca a cor do botão quando o input está válido
  validaStyleButtonSalvar() {
    if (this.form.valid) {
      return {
        'background': '#3f51b5',
        'color': '#fff',
        'border': '1px solid #3f51b5'
      };
    }
  }

  createForm() {
    this.form = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(3)]],
      dataNascimento: ['', [Validators.required]],
      turmaId: [null],
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
    const matricula = new Matricula(aluno, 1, null);
    this.alunoService.inserir(matricula)
      .subscribe(data => {
        this.matricula = data;
        console.log(this.matricula);
      }, error => {
        console.log(error);
      });
  }

  listarResponsaveis() {
    this.responsavelService.listarResponsaveisPorInstituicaoId(1)
      .subscribe(dados => {
        this.dataSource.data = dados;
        console.log(dados);
      });
  }
}
