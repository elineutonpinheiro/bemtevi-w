import { Lotacao } from '../models/lotacao.models';
import { Profissional } from '../models/Profissional.models';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LotacaoService {

  private baseUrl = 'http://192.168.0.109:8080';

  constructor(private http: HttpClient) {
  }

  inserir(lotacao: Lotacao): Observable<any> {
    return this.http.post(`${this.baseUrl}/lotacoes`, lotacao);
  }

}
