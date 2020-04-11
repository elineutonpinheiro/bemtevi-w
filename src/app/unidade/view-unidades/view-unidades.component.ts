import { Unidade } from './../../models/unidade.models';
import { Router, ActivatedRoute } from '@angular/router';
import { UnidadeService } from './../../services/unidade.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-unidades',
  templateUrl: './view-unidades.component.html',
  styleUrls: ['./view-unidades.component.css']
})
export class ViewUnidadesComponent implements OnInit {

  unidade: Unidade;

  constructor(private unidadeService: UnidadeService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.getUnidade(this.route.snapshot.params.id);
  }

  cancelar() {
    console.log('Cancelando');
    this.router.navigate(['/unidades']);
  }

  inativar() {
    console.log('Inativando');
    this.unidade.ativa = false;
    // mudar status da unidade em questão.
  }

  editar() {
    this.router.navigate(['/edit-unidades', this.unidade.id]);
    console.log('Editando');
    // atualizar os dados da unidade em questão.
  }

  getUnidade(id: number) {
    this.unidadeService.getUnidadeById(id)
      .subscribe(data => {
        this.unidade = data;
        console.log(this.unidade);
      });
  }

}
