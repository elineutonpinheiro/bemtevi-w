import { Router, ActivatedRoute } from '@angular/router';
import { ProfissionalService } from './../../services/profissional.service';
import { Component, OnInit } from '@angular/core';
import { Profissional } from 'src/app/models/Profissional.models';

@Component({
  selector: 'app-view-profissionais',
  templateUrl: './view-profissionais.component.html',
  styleUrls: ['./view-profissionais.component.css']
})
export class ViewProfissionaisComponent implements OnInit {

  profissional: Profissional;

  constructor(private profissionalService: ProfissionalService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.getProfissional(this.route.snapshot.params.id);
  }

  cancelar() {
    console.log('Cancelando');
    this.router.navigate(['/profissionais']);
  }

  inativar() {
    console.log('Inativando');
    this.profissional.ativo = false;
    // mudar status da unidade em questão.
  }

  editar() {
    this.router.navigate(['/edit-profissionais', this.profissional.id]);
    console.log('Editando');
    // atualizar os dados da unidade em questão.
  }

  getProfissional(id: number) {
    this.profissionalService.getProfissionalById(id)
      .subscribe(data => {
        this.profissional = data;
        console.log(this.profissional);
      });
  }

}
