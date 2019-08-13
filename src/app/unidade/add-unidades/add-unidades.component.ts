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
  unidade: Unidade = new Unidade();
  submitted: boolean = false;

  constructor(private unidadeService: UnidadeService,
              private formBuilder: FormBuilder,
              private router: Router) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.form = this.formBuilder.group({
      nome: [null, [Validators.required, Validators.minLength(3)]]
    });
  }

  save() {
    this.unidadeService.createUnidade(this.form.value)
      .subscribe(data => console.log(data), error => console.log(error));
    this.unidade = new Unidade();
    this.gotoList();
  }

  onSubmit() {
    this.save();
  }

  gotoList() {
    this.unidadeService.getUnidades();
    this.router.navigate(['/unidades']);
  }

}
