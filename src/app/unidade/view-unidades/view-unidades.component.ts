import { Router } from '@angular/router';
import { UnidadeService } from './../../services/unidade.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-unidades',
  templateUrl: './view-unidades.component.html',
  styleUrls: ['./view-unidades.component.css']
})
export class ViewUnidadesComponent implements OnInit {

  nome = 'Professora Conceição';

  constructor(private unidadeService: UnidadeService, private router: Router) { }

  ngOnInit() {
  }

  cancelar() {
    this.unidadeService.getUnidades();
    this.router.navigate(['/unidades']);
  }

  inativar() {
    console.log('Inativando');
    // mudar status da unidade em questão.
  }

  editar() {
    console.log('Editando');
    // atualizar os dados da unidade em questão.
  }

}
