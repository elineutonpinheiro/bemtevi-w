import { Router, ActivatedRoute } from '@angular/router';
import { UnidadeService } from './../../services/unidade.service';
import { FormGroup, FormBuilder, Validators, FormControl, NgForm } from '@angular/forms';
import { Unidade } from './../../models/unidade.models';
import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-edit-unidades',
  templateUrl: './edit-unidades.component.html',
  styleUrls: ['./edit-unidades.component.css']
})
export class EditUnidadesComponent implements OnInit {

  checked = false;
  form: FormGroup;

  _id: null;
  /*
  nome: '';
  endereco: {
    logradouro: '',
    numero: '',
    complemento: '',
    cep: '',
    bairro: '',
    cidade: '',
    estado: ''
  };
  telefone: '';
  email: '';
  ativa: true;
  instituicaoId: null; */

  unidade: Unidade;

  constructor(private unidadeService: UnidadeService,
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.getUnidade(this.route.snapshot.params.id);
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
      id: [null],
      nome: [''],
      endereco: this.fb.group({
        logradouro: [''],
        numero: [''],
        complemento: [''],
        bairro: [''],
        cidade: [''],
        estado: [''],
        cep: ['']
      }),
      telefone: [''],
      email: [''],
      ativa: [true],
      instituicaoId: [null]
    });

  }


  getUnidade(id: number) {
    this.unidadeService.getUnidadeById(id).subscribe(dados => {
      this.unidade = dados;
      console.log('Avaliação: ' + this.unidade);
      this._id = dados.id;
      this.form.setValue({
        id: dados.id,
        nome: dados.nome,
        endereco: {
          logradouro: dados.endereco.logradouro,
          numero: dados.endereco.numero,
          complemento: dados.endereco.complemento,
          bairro: dados.endereco.bairro,
          cidade: dados.endereco.cidade,
          estado: dados.endereco.estado,
          cep: dados.endereco.cep
        },
        telefone: dados.telefone,
        email: dados.email,
        ativa: dados.ativa,
        instituicaoId: dados.instituicao.id
      });
    });

  }

  updateUnidade() {


   /*  this.unidade = new Unidade(this.form.controls.id.value, this.form.controls.nome.value,
      this.form.controls.endereco.value.logradouro.value, this.form.controls.numero.value,
      this.form.controls.complemento.value, this.form.controls.cep.value,
      this.form.controls.bairro.value, this.form.controls.cidade.value,
      this.form.controls.estado.value, this.form.controls.telefone.value,
      this.form.controls.email.value, this.form.controls.ativa.value, this.form.controls.instituicaoId.value); */


    this.unidadeService.updateUnidade(this.form.value, this._id).subscribe(dados => {
      this.router.navigate(['/view-unidades', dados.id]);
      console.log('Dados da Atualização: ' + dados);
    }, error => {
      console.log(error);
    });


    /* this.unidadeService.updateUnidade(this._id, form).subscribe(dados => {
        this.router.navigate(['/view-unidades', dados.id]);
      }, error => {
        console.log(error);
      }); */
  }

  //Troca a cor do botão quando o input está válido
  validaStyleButtonSalvar() {
    if (this.form.valid) {
      return {
        'background': '#ffc107',
        'color': '#fff',
        'border': '1px solid #ffc107'
      };
    }
  }

  cancelar() {
    this.unidadeService.getUnidades();
    this.router.navigate(['/unidades']);
  }

}
