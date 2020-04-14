import { Profissional } from './../models/profissional.models';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfissionalService {

  private baseUrl = 'http://192.168.0.109:8080';

  constructor(private http: HttpClient) {
  }

  inserir(profissional: Profissional): Observable<any> {
    return this.http.post(`${this.baseUrl}/profissionais`, profissional);
  }

  listar(): Observable<Profissional> {
    return this.http.get<Profissional>(`${this.baseUrl}/profissionais`);
  }

  listarProfissionaisPorInstituicaoId(id: any): Observable<Profissional[]> {
    return this.http.get<Profissional[]>(`${this.baseUrl}/instituicoes/${id}/profissionais`);
  }

  getProfissionalById(id: any): Observable<Profissional> {
    return this.http.get<Profissional>(`${this.baseUrl}/profissionais/${id}`);
  }

  updateProfissional(profissional: Profissional, id: number): Observable<any> {
    return this.http.put(`${this.baseUrl}/profissionais/${id}`, profissional);
  }


}
