import {Injectable} from '@angular/core';
import {Item} from './item';
import {Observable, of, throwError} from 'rxjs';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {catchError} from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  private itemsURL = 'http://localhost:9000/items';

  constructor(private http: HttpClient) {
  }

  getItems(): Observable<Item[]> {
    return this.http.get<Item[]>(this.itemsURL)
      .pipe(
        catchError(this.handleError<Item[]>('getItems', []))
      );
  }

  private handleError <T>(operation = 'operation', result?: T){
    return(error: any): Observable<T> => {
      if (error instanceof HttpErrorResponse){
        console.error('The server seems to be sleeping, gently wake him with soft words and a strong coffee');
      }
      else {console.error(error);
      }
      return of(result as T);
    };

  }

}

