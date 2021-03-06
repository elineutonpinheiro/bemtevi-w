import { environment } from './../../environments/environment.prod';
import { Instituicao } from './../models/instituicao.models';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InstituicaoService {

  // private baseUrl = 'http://192.168.0.109:8080';

  private baseUrl;

  constructor(private http: HttpClient) {
    this.baseUrl = environment.apiUrl;
  }

  getInstituicoes(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/instituicoes`);
  }

  inserir(instituicao: Instituicao): Observable<any> {
    return this.http.post(`${this.baseUrl}/instituicoes`, instituicao);
  }

}
