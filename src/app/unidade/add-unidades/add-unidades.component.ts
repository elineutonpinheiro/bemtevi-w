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

  constructor(
    private unidadeService: UnidadeService,
    private fb: FormBuilder,
    private router: Router) {

    this.createForm();
  }

  ngOnInit() {

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
      endereco: this.fb.group({
        logradouro: ['', [Validators.required]],
        numero: ['', [Validators.required]],
        complemento: [''],
        bairro: ['', [Validators.required]],
        cidade: ['', [Validators.required]],
        estado: ['', [Validators.required]],
        cep: ['', [Validators.required, Validators.minLength(8)]]
      }),
      telefone: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      ativa: [true],
      instituicaoId: [1]
    });
  }

  onSubmit() {
    this.save();
    this.gotoList();
  }

  gotoList() {
    this.unidadeService.getUnidades();
    this.router.navigate(['/unidades']);
  }

  save() {
    this.unidadeService.createUnidade(this.form.value)
      .subscribe(response => {
        this.unidade = response;
        console.log(this.unidade);
      }, error => {
        console.log(error);
      });
  }

}
