import { AuthService } from './../../services/auth.service';
import { TurmaService } from './../../services/turma.service';
import { Turma } from './../../models/turma.models';
import { LotacaoService } from './../../services/lotacao.service';
import { ProfissionalService } from '../../services/profissional.service';
import { Lotacao } from './../../models/lotacao.models';
import { UnidadeService } from './../../services/unidade.service';
import { Unidade } from './../../models/unidade.models';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Profissional } from './../../models/profissional.models';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-profissionais',
  templateUrl: './add-profissionais.component.html',
  styleUrls: ['./add-profissionais.component.css']
})
export class AddProfissionaisComponent implements OnInit {

  form: FormGroup;
  profissional: Profissional;
  lotacao: Lotacao;
  submitted = false;
  checked = false;
  hide = true;

  unidades: Unidade[];
  turmas: Turma[];

  constructor(
    private profissionalService: ProfissionalService,
    private unidadeService: UnidadeService,
    private lotacaoService: LotacaoService,
    private turmaService: TurmaService,
    private auth: AuthService,
    private fb: FormBuilder,
    private router: Router) {

    this.createForm();

  }

  ngOnInit() {
    this.listarUnidades();
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
      nome: [null, [Validators.required, Validators.minLength(3)]],
      cargo: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
      senha: [null, [Validators.required]],
      unidadeId: [null, [Validators.required]],
      turmaId: [null, [Validators.required]],
      ativo: [true]
    });
  }

  onSubmit() {
    this.salvarProfissional();
    this.gotoList();
  }

  gotoList() {
    this.profissionalService.listar();
    this.router.navigate(['/profissionais']);
  }

  listarUnidades() {
    this.unidadeService.listarUnidadesPorInstituicaoId(1).
      subscribe(response => {
        this.unidades = response;
        this.form.controls.unidadeId.setValue(this.unidades[0].id);
        this.atualizarTurmas();
      }, error => { });
  }

  atualizarTurmas() {
    const unidade = this.form.value.unidadeId;
    this.turmaService.buscarTurmas(unidade).
      subscribe(response => {
        this.turmas = response;
        this.form.controls.turmaId.setValue(null);
      }, error => { });
  }

  salvarProfissional() {
    this.profissional = new Profissional(null, this.form.controls.nome.value, this.form.controls.cargo.value,
      this.form.controls.email.value, this.form.controls.senha.value, this.form.controls.ativo.value);
    this.profissionalService.inserir(this.profissional)
      .subscribe(data => {
        this.profissional = data;
        console.log(this.profissional);

        //Salva usuário no Firebase
        this.auth.registrar(this.form.value.email, this.form.value.senha);

        const turma = this.form.value.turmaId;
        this.salvarLotacao(turma, this.profissional.id, new Date());
      }, error => {
        console.log(error);
      });
  }

  salvarLotacao(turmaId: any, profissionalId: any, dataInicio: Date) {
    this.lotacao = new Lotacao(turmaId, profissionalId, dataInicio, null);
    this.lotacaoService.inserir(this.lotacao)
      .subscribe(data => {
        this.lotacao = data;
        console.log(this.lotacao);
      }, error => {
        console.log(error);
      });
  }

}
