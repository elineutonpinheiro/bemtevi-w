import { environment } from './../../environments/environment.prod';
import { ResponsavelNewDTO } from './../models/responsavelNewDTO.models';
import { Responsavel } from './../models/responsavel.models';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ResponsavelService {

  /* private baseUrl = 'http://192.168.0.109:8080'; */

  private baseUrl;

  constructor(private http: HttpClient) {
    this.baseUrl = environment.apiUrl;
  }

  getResponsaveis(): Observable<Responsavel[]> {
    return this.http.get<Responsavel[]>(`${this.baseUrl}/responsaveis`);
  }

  getResponsavelPorId(id: number): Observable<Responsavel> {
    return this.http.get<Responsavel>(`${this.baseUrl}/responsaveis/${id}`);
  }

  listarResponsaveisPorInstituicaoId(id: any): Observable<Responsavel[]> {
    return this.http.get<Responsavel[]>(`${this.baseUrl}/instituicoes/${id}/responsaveis`);
  }

  inserir(responsavel: ResponsavelNewDTO): Observable<any> {
    return this.http.post(`${this.baseUrl}/responsaveis`, responsavel);
  }

}
