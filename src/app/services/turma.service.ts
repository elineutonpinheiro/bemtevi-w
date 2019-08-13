import { Turma } from './../models/turma.models';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TurmaService {

  /* private serviceUrl = 'http://localhost:4200/api/turmas';

  constructor(private http: HttpClient) { }

  getResponsaveis(): Observable<Turma[]> {
    return this.http.get<Turma[]>(`${this.serviceUrl}`);
  } */

}
