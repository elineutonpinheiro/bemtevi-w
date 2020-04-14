import { ProfissionalDTO } from './../../models/profissionalDTO.models';
import { Turma } from './../../models/turma.models';
import { Unidade } from './../../models/unidade.models';
import { Lotacao } from './../../models/lotacao.models';
import { Profissional } from './../../models/profissional.models';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ProfissionalService } from 'src/app/services/profissional.service';
import { UnidadeService } from 'src/app/services/unidade.service';
import { LotacaoService } from 'src/app/services/lotacao.service';
import { TurmaService } from 'src/app/services/turma.service';
import { AuthService } from 'src/app/services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-profissionais',
  templateUrl: './edit-profissionais.component.html',
  styleUrls: ['./edit-profissionais.component.css']
})
export class EditProfissionaisComponent implements OnInit {

  form: FormGroup;

  lotacao: Lotacao;
  hide = true;

  _id: null;
  unidade: any;
  profissional: ProfissionalDTO;

  constructor(
    private profissionalService: ProfissionalService,
    private unidadeService: UnidadeService,
    private lotacaoService: LotacaoService,
    private turmaService: TurmaService,
    private auth: AuthService,
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute) {



  }

  ngOnInit() {
    this.getProfissional(this.route.snapshot.params.id);
    //this.listarUnidades();
    this.createForm();
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
      id: [null],
      nome: [''],
      cargo: [''],
      email: [''],
      senha: [''],
      unidadeId: [''],
      turmaId: [''],
      ativo: [true]
    });
  }

  getProfissional(id: number) {
    this.profissionalService.getProfissionalById(id).subscribe(dados => {
      this.profissional = dados;
      console.log('Avaliação: ' + this.profissional);
      console.log(dados);
      this.form.setValue({
        id: dados.id,
        nome: dados.nome,
        cargo: dados.cargo,
        ativo: dados.ativo
      });
    });
  }

  /* getUnidade(id: number) {
    this.unidadeService.getUnidadeById(id).subscribe(dados => {
      this.unidade = dados;
      console.log('Avaliação: ' + this.unidade);
      this._id = dados.id;
      this.form.setValue({
        unidadeId: dados.id
      });
    });
  } */

  /* getLotacao(id: number) {
    this.lotacao.getLotacaoId(id).subscribe(dados => {
      this.unidade = dados;
      console.log('Avaliação: ' + this.unidade);
      this._id = dados.id;
      this.form.setValue({
        unidadeId: dados.id
      });
    });
  } */

  onSubmit() {
    /* this.salvarProfissional(); */
    this.gotoList();
  }

  gotoList() {
    this.profissionalService.listar();
    this.router.navigate(['/profissionais']);
  }

  /* listarUnidades() {
    this.unidadeService.listarUnidadesPorInstituicaoId(1).
      subscribe(response => {
        this.unidades = response;
        this.form.controls.unidadeId.setValue(this.unidades[0].id);
        this.atualizarTurmas();
      }, error => { });
  } */

/*   atualizarTurmas() {
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
    this.profissionalService.updateProfissional(this.form.value, this._id)
      .subscribe(dados => {
        this.profissional = dados;
        console.log(this.profissional);
        this.router.navigate(['/view-unidades', dados.id]);

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
  } */

}
