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
  contato: {
    telefone: '',
    email: ''
  };
  turmas: null;
  profissionais: null;
  alunos: null;
  ativa: true;

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
    nome: ['', [Validators.required, Validators.minLength(3)]],
    endereco: this.fb.group({
      cep: [''],
      numero: [''],
      complemento: [''],
      logradouro: [''],
      bairro: [''],
      cidade: [''],
      estado: ['']
    }),
    contato: this.fb.group({
      telefone: [''],
      email: ['']
    })
  });

}


getUnidade(id: number) {
  this.unidadeService.getUnidadeById(id).subscribe(dados => {
    this._id = dados.id;
    this.form.setValue({
      nome: dados.nome,
      endereco: {
        cep: dados.endereco.cep,
        numero: dados.endereco.numero,
        complemento: dados.endereco.complemento,
        logradouro: dados.endereco.logradouro,
        bairro: dados.endereco.bairro,
        cidade: dados.endereco.cidade,
        estado: dados.endereco.estado
      },
      contato: {
        telefone: dados.contato.telefone,
        email: dados.contato.email
      }
    });
  });

}

updateUnidade(form: NgForm) {

  //Não ta pegando o ID, fica indefinido
  this.unidadeService.updateUnidade2(this._id, form).subscribe(dados => {
      this.router.navigate(['/view-unidades', dados.id]);
    }, error => {
      console.log(error);
    });

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

cancelar() {
  this.unidadeService.getUnidades();
  this.router.navigate(['/unidades']);
}

}
