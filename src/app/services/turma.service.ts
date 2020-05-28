import { Turma } from './../models/turma.models';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TurmaService {

  private baseUrl = 'http://192.168.0.109:8080';

  constructor(private http: HttpClient) { }

  getTurmas(): Observable<Turma[]> {
    return this.http.get<Turma[]>(`${this.baseUrl}/turmas`);
  }

  buscarTurmas(unidadeId: string): Observable<Turma[]> {
    return this.http.get<Turma[]>(`${this.baseUrl}/unidades/${unidadeId}/turmas`);
  }

  inserir(turma: Turma): Observable<any> {
    return this.http.post(`${this.baseUrl}/turmas`, turma);
  }

}
