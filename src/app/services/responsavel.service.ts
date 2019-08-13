import { Responsavel } from './../models/responsavel.models';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ResponsavelService {

  /* private serviceUrl = 'http://localhost:4200/api/responsaveis';

  constructor(private http: HttpClient) { }

  getResponsaveis(): Observable<Responsavel[]> {
    return this.http.get<Responsavel[]>(`${this.serviceUrl}`);
  } */

}
