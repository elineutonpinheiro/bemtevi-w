import { Turma } from './../models/turma.models';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TurmaService {

  private baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  buscarTurmas(unidadeId: string): Observable<Turma[]> {
    return this.http.get<Turma[]>(`${this.baseUrl}/unidades/${unidadeId}/turmas`);
  }

}
