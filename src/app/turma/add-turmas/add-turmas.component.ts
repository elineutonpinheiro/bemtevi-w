import { AnoLetivoService } from './../../services/anoLetivo.service';
import { AnoLetivo } from './../../models/anoLetivo.models';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Profissional } from 'src/app/models/Profissional.models';
import { Lotacao } from 'src/app/models/lotacao.models';
import { Unidade } from 'src/app/models/unidade.models';
import { Turma } from 'src/app/models/turma.models';
import { ProfissionalService } from 'src/app/services/profissional.service';
import { UnidadeService } from 'src/app/services/unidade.service';
import { LotacaoService } from 'src/app/services/lotacao.service';
import { TurmaService } from 'src/app/services/turma.service';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-turmas',
  templateUrl: './add-turmas.component.html',
  styleUrls: ['./add-turmas.component.css']
})
export class AddTurmasComponent implements OnInit {

  form: FormGroup;
  turma: Turma;
  submitted = false;
  checked = false;
  hide = true;

  unidades: Unidade[];
  anosLetivos: AnoLetivo[];

  constructor(
    private unidadeService: UnidadeService,
    private turmaService: TurmaService,
    private anoLetivoService: AnoLetivoService,
    private auth: AuthService,
    private fb: FormBuilder,
    private router: Router) {

    this.createForm();

  }

  ngOnInit() {
    this.listarUnidades();
    this.listarAnosLetivos();
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
      periodo: ['', [Validators.required]],
      sala: ['', [Validators.required]],
      ativa: [true],
      unidadeId: ['', [Validators.required]],
      anoLetivoId: ['', [Validators.required]]
    });
  }

  onSubmit() {
    this.salvarTurma();
    this.gotoList();
  }

  gotoList() {
    this.turmaService.getTurmas();
    this.router.navigate(['/turmas']);
  }

  listarUnidades() {
    this.unidadeService.getUnidades().
      subscribe(response => {
        this.unidades = response;
        console.log(this.unidades);
      }, error => { });
  }

  listarAnosLetivos() {
    this.anoLetivoService.getAnosLetivos().
      subscribe(response => {
        this.anosLetivos = response;
        console.log(this.anosLetivos);
      }, error => { });
  }

  salvarTurma() {
    this.turmaService.inserir(this.form.value)
    .subscribe(data => {
      this.turma = data;
      console.log(this.turma);

    }, error => {
      console.log(error);
    });
  }

}
