import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Author } from '../shared/models/author';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  baseUrl: string = "https://localhost:44365/api/authors";

  constructor(private httpClient : HttpClient) { }

  getAuthors(): Observable<Author[]>{
    return this.httpClient.get<Author[]>(this.baseUrl)
    .pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error : any){
    console.error('server error:', error);
    if(error.error instanceof Error){
      const errorMessage = error.error.message;
      return Observable.throw(errorMessage);
    }

    return Observable.throw(error || 'Server error');
  }
}
