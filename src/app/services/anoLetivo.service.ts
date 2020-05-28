import { Matricula } from './../models/matricula.models';
import { Aluno } from 'src/app/models/aluno.models';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AnoLetivoService {

  private baseUrl = 'http://192.168.0.109:8080';

  constructor(private http: HttpClient) { }

  getAnosLetivos(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/anosletivos`);
  }

}
