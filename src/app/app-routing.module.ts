import { AddProfissionaisComponent } from './profissional/add-profissionais/add-profissionais.component';
import { AddTurmasComponent } from './turma/add-turmas/add-turmas.component';
import { HomeComponent } from './home/home.component';
import { ViewUnidadesComponent } from './unidade/view-unidades/view-unidades.component';
import { EditUnidadesComponent } from './unidade/edit-unidades/edit-unidades.component';
import { ListResponsaveisComponent } from './responsavel/list-responsaveis/list-responsaveis.component';
import { ListProfissionaisComponent } from './profissional/list-profissionais/list-profissionais.component';
import { ListTurmasComponent } from './turma/list-turmas/list-turmas.component';
import { ListUnidadesComponent } from './unidade/list-unidades/list-unidades.component';
import { AddUnidadesComponent } from './unidade/add-unidades/add-unidades.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListAlunosComponent } from './aluno/list-alunos/list-alunos.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'unidades', component: ListUnidadesComponent},
  {path: 'view-unidades/:id', component: ViewUnidadesComponent},
  {path: 'edit-unidades/:id', component: EditUnidadesComponent},
  {path: 'turmas', component: ListTurmasComponent},
  {path: 'add-turmas', component: AddTurmasComponent},
  {path: 'profissionais', component: ListProfissionaisComponent},
  {path: 'add-profissionais', component: AddProfissionaisComponent},
  {path: 'responsaveis', component: ListResponsaveisComponent},
  {path: 'alunos', component: ListAlunosComponent},
  {path: 'add-unidade', component: AddUnidadesComponent},
  {path: 'edit-unidade', component: EditUnidadesComponent},
  {path: 'view-unidade', component: ViewUnidadesComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
