import { UnidadeService } from './unidade.service';
import { Unidade } from './../models/unidade.models';
import { CollectionViewer, DataSource } from '@angular/cdk/collections';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { catchError, finalize } from 'rxjs/operators';

/* export class UnidadeDataSource implements DataSource<Unidade> {

  private unidadesSubject = new BehaviorSubject<Unidade[]>([]);
  private loadingSubject = new BehaviorSubject<boolean>(false);

  public loading$ =  this.loadingSubject.asObservable();

  constructor(private unidadeService: UnidadeService){}

  loadUnidades(unityId: number, filter = '',
    sortDirection = 'asc', pageIndex = 0, pageSize = 3){

      this.loadingSubject.next(true);

      this.unidadeService.findUnits(unityId, filter, sortDirection,
        pageIndex, pageSize).pipe(
          catchError(() => of([])),
          finalize(() => this.loadingSubject.next(false))
        )
        .subscribe(unidades => this.unidadesSubject.next(unidades));

    }

    connect(collectionViewer: CollectionViewer): Observable<Unidade[]> {
      console.log('Conectando data source');
      return this.unidadesSubject.asObservable();
    }
    disconnect(collectionViewer: CollectionViewer): void {
      this.unidadesSubject.complete();
      this.loadingSubject.complete();
    }

} */
