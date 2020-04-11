import { Profissional } from '../models/Profissional.models';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfissionalService {

  private baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {
  }

  inserir(profissional: Profissional): Observable<any> {
    return this.http.post(`${this.baseUrl}/profissionais`, profissional);
  }

  listar(): Observable<Profissional> {
    return this.http.get<Profissional>(`${this.baseUrl}/profissionais`);
  }

}
