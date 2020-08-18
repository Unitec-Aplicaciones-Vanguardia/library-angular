import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/shared/models/book';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from 'src/app/core/book.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {

  bookName: string;
  book: Book;

  constructor(private activatedRoute: ActivatedRoute, private bookService: BookService, private router: Router) { }

  ngOnInit(): void {
    let id = +this.activatedRoute.snapshot.paramMap.get('id');
    this.loadBook(id);
  }

  loadBook(id : number){
    this.bookService.getBook(id)
      .subscribe((book : Book) => {
        this.bookName = book.name;
        this.book = book;
      })
  }

  borrowBook() {
    this.bookService.borrow(this.book.id)
      .subscribe((data: any) => {
        this.loadBook(this.book.id)
      },
      error => alert(error.error));
  }

  returnBook() {
    this.bookService.return(this.book.id)
      .subscribe((data: any) => {
        this.loadBook(this.book.id)
      },
      error => alert(error.error));
  }
}
