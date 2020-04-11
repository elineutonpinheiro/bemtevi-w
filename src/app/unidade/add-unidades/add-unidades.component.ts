import { Unidade } from './../../models/unidade.models';
import { UnidadeService } from '../../services/unidade.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-unidades',
  templateUrl: './add-unidades.component.html',
  styleUrls: ['./add-unidades.component.css']
})
export class AddUnidadesComponent implements OnInit {

  form: FormGroup;
  unidade: Unidade;
  submitted = false;
  checked = false;

  constructor(private unidadeService: UnidadeService,
    private fb: FormBuilder,
    private router: Router) { }

  ngOnInit() {
    this.createForm(this.unidade);
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


  createForm(unidade: Unidade) {
    this.form = this.fb.group({
      nome: [null, [Validators.required, Validators.minLength(3)]],
      endereco: this.fb.group({
        cep: [null],
        numero: [null],
        complemento: [null],
        logradouro: [null],
        bairro: [null],
        cidade: [null],
        estado: [null]
      }),
      contato: this.fb.group({
        telefone: [null],
        email: [null]
      }),
      turmas: [0],
      profissionais: [0],
      alunos: [0],
      ativa: [true]

      /* nome: [null, [Validators.required, Validators.minLength(3)]],
      ativa: true,
      turmas: 0,
      alunos: 0,
      profissionais: 0 */

    });
  }

  save() {
    this.unidadeService.createUnidade(this.form.value)
      .subscribe(data => console.log(data), error => console.log(error));
    //this.unidade = new Unidade();
    this.gotoList();
  }

  onSubmit() {
    this.save();
    //console.log(this.form.value);
  }

  gotoList() {
    this.unidadeService.getUnidades();
    this.router.navigate(['/unidades']);
  }

}
