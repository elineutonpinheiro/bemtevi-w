import { Unidade } from './../models/unidade.models';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { tap, catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UnidadeService {

  private serviceUrl = 'http://localhost:3000/unidades';

  constructor(private http: HttpClient) { }

  unidades: Unidade[];

  getUnidades(): Observable<any> {
    return this.http.get(`${this.serviceUrl}`);
  }

  getUnidadeById(id: number): Observable<any> {
    return this.http.get(`${this.serviceUrl}/${id}`);
  }

  createUnidade(unidade: any): Observable<any> {
    return this.http.post(`${this.serviceUrl}`, unidade);
  }

  updateUnidade(unidade: any): Observable<any> {
    return this.http.put(`${this.serviceUrl}/${unidade.id}`, unidade);
  }

  updateUnidade2(id: number, value: any): Observable<any> {
    return this.http.put(`${this.serviceUrl}/${id}`, value);
  }

   deleteUnidade(id: number): Observable<any> {
    return this.http.delete(`${this.serviceUrl}/${id}`, { responseType: 'text' });
  }

}

/* findUnits(
  unityId: number, filter = '', sortOrder = 'asc',
  pageNumber = 0, pageSize = 3): Observable<Unidade[]> {

    return this.http.get(this.serviceUrl, {
      params: new HttpParams()
      .set('unityId', unityId.toString())
      .set('filter', filter)
      .set('sortOrder', sortOrder)
      .set('pageNumber', pageNumber.toString())
      .set('pageSize', pageSize.toString())
    }).pipe(
      map(res => res["payload"])
    );
  } */


/*  updateUnidade(id: number, value: any): Observable<any> {
    return this.http.put(`${this.serviceUrl}/${id}`, value);
  } */

/* const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}; */

/*   listar() {
    return this.http.get<any[]>(`${this.serviceUrl}`);
  } */

/*   criar(unidade): Observable<Unidade> {
    return this.http.post<Unidade>(this.serviceUrl, unidade, httpOptions).pipe(
      tap((unidade: Unidade) => console.log(`Unidade adicionadada w/ id=${unidade.id}`)),
      catchError(this.handleError<Unidade>('criar'))
    )
  } */


  /* createUnidade(unidade: Object): Observable<Object> {
    return this.http.post(`${this.serviceUrl}`, unidade);
  }

  getUnidades(): Observable<Unidade[]> {
    return this.http.get<Unidade[]>(`${this.serviceUrl}`);
  } */

  /* private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  } */


