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
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: 'unidades', component: ListUnidadesComponent},
  {path: 'turmas', component: ListTurmasComponent},
  {path: 'profissionais', component: ListProfissionaisComponent},
  {path: 'responsaveis', component: ListResponsaveisComponent},
  {path: 'alunos', component: ListAlunosComponent},
  {path: 'add-unidade', component: AddUnidadesComponent},
  {path: 'edit-unidade', component: EditUnidadesComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
