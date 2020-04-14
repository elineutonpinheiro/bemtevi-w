import { Matricula } from './../models/matricula.models';
import { Aluno } from 'src/app/models/aluno.models';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {

 private baseUrl = 'http://192.168.0.109:8080';

  constructor(private http: HttpClient) { }

  getAlunos(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}`);
  }

  listarAlunosPorInstituicaoId(id: any): Observable<Aluno[]> {
    return this.http.get<Aluno[]>(`${this.baseUrl}/instituicoes/${id}/alunos`);
  }

  inserir(matricula: Matricula): Observable<any> {
    return this.http.post(`${this.baseUrl}/matriculas`, matricula);
  }

}
