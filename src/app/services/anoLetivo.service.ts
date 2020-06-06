import { environment } from './../../environments/environment.prod';
import { Matricula } from './../models/matricula.models';
import { Aluno } from 'src/app/models/aluno.models';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AnoLetivoService {

  /* private baseUrl = 'http://192.168.0.109:8080'; */

  private baseUrl;

  constructor(private http: HttpClient) {
    this.baseUrl = environment.apiUrl;
  }

  getAnosLetivos(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/anosletivos`);
  }

}
