import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Book } from '../shared/models/book';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  baseUrl: string = "https://localhost:44365/api/books";
  
  constructor(private httpClient : HttpClient) { }

  getBooksByAuthor(name : string) :Observable<Book[]>{
    return this.httpClient.get<Book[]>(`${this.baseUrl}?authorName=${name}`)
      .pipe(
        catchError(this.handleError)
      );
  }

  getBook(id : number) : Observable<Book>{
    return this.httpClient.get<Book>(`${this.baseUrl}/${id}`)
    .pipe(
      catchError(this.handleError)
    );
  }

  borrow(id : number){
    return this.httpClient.post(`${this.baseUrl}/${id}/borrowings`, null);
  }

  
  return(id : number){
    return this.httpClient.delete(`${this.baseUrl}/${id}/borrowings`);
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
