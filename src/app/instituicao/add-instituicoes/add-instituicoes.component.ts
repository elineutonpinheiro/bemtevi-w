import { InstituicaoService } from './../../services/instituicao.service';
import { Component, OnInit } from '@angular/core';
import { Instituicao } from 'src/app/models/instituicao.models';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-instituicoes',
  templateUrl: './add-instituicoes.component.html',
  styleUrls: ['./add-instituicoes.component.css']
})
export class AddInstituicoesComponent implements OnInit {

  form: FormGroup;
  instituicao: Instituicao;
  submitted = false;
  checked = false;
  hide = true;

  constructor(
    private instituicaoService: InstituicaoService,
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
      nome: [null, [Validators.required, Validators.minLength(3)]],
      ativa: [true]
    });
  }

  onSubmit() {
    this.salvarInstituicao();
    this.gotoList();
  }

  gotoList() {
    this.instituicaoService.getInstituicoes();
    this.router.navigate(['/instituicoes']);
  }


  salvarInstituicao() {
    this.instituicaoService.inserir(this.form.value)
      .subscribe(data => {
        this.instituicao = data;
        console.log(this.instituicao);
      }, error => {
        console.log(error);
      });
  }

}
