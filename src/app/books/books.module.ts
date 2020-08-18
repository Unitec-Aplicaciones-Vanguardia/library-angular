import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksComponent } from '../books/books.component';
import { BooksRoutingModule } from './books-routing.module';
import { BookDetailComponent } from './book-detail/book-detail.component';


@NgModule({
  declarations: [BooksComponent, BookDetailComponent],
  imports: [
    CommonModule,
    BooksRoutingModule
  ]
})
export class BooksModule { }
