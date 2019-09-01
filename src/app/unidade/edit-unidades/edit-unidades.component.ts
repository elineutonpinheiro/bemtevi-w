import { Router } from '@angular/router';
import { UnidadeService } from './../../services/unidade.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Unidade } from './../../models/unidade.models';
import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-edit-unidades',
  templateUrl: './edit-unidades.component.html',
  styleUrls: ['./edit-unidades.component.css']
})
export class EditUnidadesComponent implements OnInit {


  unidade: Unidade;
  form: FormGroup;

  constructor(private unidadeService: UnidadeService,
    private formBuilder: FormBuilder,
    private router: Router) { }

  ngOnInit() {
    /* const unidadeId = localStorage.getItem('editUnidadeId');

    if (!unidadeId) {
     alert('Ação Inválida.');
     this.router.navigate(['unidades']);
     return; */
  }
  /* this.createForm();
  this.unidadeService.getUnidadeById(+unidadeId).subscribe(dados => {
  this.form.setValue(dados);
 }); */
/* } */

/* createForm() {
  this.form = this.formBuilder.group({
    id: [],
    nome: [null, [Validators.required, Validators.minLength(3)]],
    isAtiva: []
  });

   --------------------------------------
     Não entendi o porquê de ser necessário
     estar todos os campos no form

     Quando atualiza, o elemento vai para
     baixo na listagem
     --------------------------------------
} */

/* onSubmit() {
  this.updateUnidade();
}

updateUnidade() {
  this.unidadeService.updateUnidade(this.form.value).pipe(first()).subscribe(
    dados => {
      this.router.navigate(['unidades']);
    },
    error => {
      alert(error);
    });
} */

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
