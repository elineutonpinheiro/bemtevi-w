import { Aluno } from '../models/aluno.models';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {

 /*  private serviceUrl = 'http://localhost:4200/api/alunos';

  constructor(private http: HttpClient) { }

  getResponsaveis(): Observable<Aluno[]> {
    return this.http.get<Aluno[]>(`${this.serviceUrl}`);
  } */

}
