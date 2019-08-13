import { Profissional } from '../models/Profissional.models';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfissionalService {

  /* private serviceUrl = 'http://localhost:4200/api/profissionais';

  constructor(private http: HttpClient) { }

  getResponsaveis(): Observable<Profissional[]> {
    return this.http.get<Profissional[]>(`${this.serviceUrl}`);
  } */

}
