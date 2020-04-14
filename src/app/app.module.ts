import { AddProfissionaisComponent } from './profissional/add-profissionais/add-profissionais.component';
import { ProfissionalService } from './services/profissional.service';
import { TurmaService } from './services/turma.service';
import { ResponsavelService } from './services/responsavel.service';
import { UnidadeService } from './services/unidade.service';
import { AlunoService } from './services/aluno.service';

import { MatPaginatorIntl, MAT_DATE_LOCALE } from '@angular/material';
import { PortalModule } from '@angular/cdk/portal';
import { MaterialModule } from './material-module/material-module';
import { ListUnidadesComponent } from './unidade/list-unidades/list-unidades.component';
import { BrowserModule, DomSanitizer } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { LayoutModule } from '@angular/cdk/layout';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddUnidadesComponent } from './unidade/add-unidades/add-unidades.component';
import { EditUnidadesComponent } from './unidade/edit-unidades/edit-unidades.component';
import { HomeComponent } from './home/home.component';
import { AddTurmasComponent } from './turma/add-turmas/add-turmas.component';
import { EditTurmasComponent } from './turma/edit-turmas/edit-turmas.component';
import { ListTurmasComponent } from './turma/list-turmas/list-turmas.component';
import { EditProfissionaisComponent } from './profissional/edit-profissionais/edit-profissionais.component';
import { ListProfissionaisComponent } from './profissional/list-profissionais/list-profissionais.component';
import { AddResponsaveisComponent } from './responsavel/add-responsaveis/add-responsaveis.component';
import { EditResponsaveisComponent } from './responsavel/edit-responsaveis/edit-responsaveis.component';
import { ListResponsaveisComponent } from './responsavel/list-responsaveis/list-responsaveis.component';
import { AddAlunosComponent } from './aluno/add-alunos/add-alunos.component';
import { EditAlunosComponent } from './aluno/edit-alunos/edit-alunos.component';
import { ListAlunosComponent } from './aluno/list-alunos/list-alunos.component';
import { myMatPaginatorIntl } from './myMatPaginatorIntl';
import { HttpClientModule } from '@angular/common/http';
import { RodapeComponent } from './rodape/rodape.component';
import { UserMenuComponent } from './user-menu/user-menu.component';
import { ViewUnidadesComponent } from './unidade/view-unidades/view-unidades.component';
import { AngularFireModule} from '@angular/fire';
import { environment } from 'src/environments/environment';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { ViewProfissionaisComponent } from './profissional/view-profissionais/view-profissionais.component';

@NgModule({
  declarations: [
    AppComponent,
    ListUnidadesComponent,
    MainMenuComponent,
    AddUnidadesComponent,
    EditUnidadesComponent,
    HomeComponent,
    AddTurmasComponent,
    EditTurmasComponent,
    ListTurmasComponent,
    AddProfissionaisComponent,
    EditProfissionaisComponent,
    ListProfissionaisComponent,
    AddResponsaveisComponent,
    EditResponsaveisComponent,
    ListResponsaveisComponent,
    AddAlunosComponent,
    EditAlunosComponent,
    ListAlunosComponent,
    RodapeComponent,
    UserMenuComponent,
    ViewUnidadesComponent,
    ViewProfissionaisComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    PortalModule,
    ScrollingModule,
    FormsModule,
    ReactiveFormsModule,
    LayoutModule,
    MaterialModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule
  ],
  providers: [
    { provide: MatPaginatorIntl, useValue: myMatPaginatorIntl() },
    UnidadeService, AlunoService, ProfissionalService, ResponsavelService, TurmaService,
    {provide: MAT_DATE_LOCALE, useValue: 'pt-BR'},

  ],
  bootstrap: [AppComponent]
})

export class AppModule {
}



