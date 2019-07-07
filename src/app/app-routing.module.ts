import { ListResponsaveisComponent } from './responsavel/list-responsaveis/list-responsaveis.component';
import { ListProfissionaisComponent } from './profissional/list-profissionais/list-profissionais.component';
import { ListTurmasComponent } from './turma/list-turmas/list-turmas.component';
import { ListUnidadesComponent } from './unidade/list-unidades/list-unidades.component';
import { EditUnidadesComponent } from './unidade/edit-unidades/edit-unidades.component';
import { AddUnidadesComponent } from './unidade/add-unidades/add-unidades.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListAlunosComponent } from './aluno/list-alunos/list-alunos.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: 'list-unidades', component: ListUnidadesComponent},
  {path: 'list-turmas', component: ListTurmasComponent},
  {path: 'list-profissionais', component: ListProfissionaisComponent},
  {path: 'list-responsaveis', component: ListResponsaveisComponent},
  {path: 'list-alunos', component: ListAlunosComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
