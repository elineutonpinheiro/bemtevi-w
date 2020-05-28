import { ResponsavelService } from './../../services/responsavel.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ResponsavelNewDTO } from './../../models/responsavelNewDTO.models';
import { Component, OnInit } from '@angular/core';
import { ProfissionalService } from 'src/app/services/profissional.service';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-responsaveis',
  templateUrl: './add-responsaveis.component.html',
  styleUrls: ['./add-responsaveis.component.css']
})
export class AddResponsaveisComponent implements OnInit {


  form: FormGroup;
  responsavel: ResponsavelNewDTO;

  hide = true;

  constructor(
    private responsavelService: ResponsavelService,
    private auth: AuthService,
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
      parentesco: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
      senha: [null, [Validators.required]],
      ativo: [true]
    });
  }

  onSubmit() {
    this.salvarResponsavel();
    this.gotoList();
  }

  gotoList() {
    this.responsavelService.listarResponsaveisPorInstituicaoId(1);
    this.router.navigate(['/responsaveis']);
  }

  salvarResponsavel() {
    this.responsavelService.inserir(this.form.value)
      .subscribe(data => {
        this.responsavel = data;
        console.log(this.responsavel);

        //Salva usuário no Firebase
        this.auth.registrar(this.form.value.email, this.form.value.senha);
      }, error => {
        console.log(error);
      });
  }

}
