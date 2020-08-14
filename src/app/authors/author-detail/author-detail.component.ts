import { Component, OnInit } from '@angular/core';
import { Author } from 'src/app/shared/models/author';
import { AuthorService } from 'src/app/core/author.service';
import { ActivatedRoute } from '@angular/router';
import { Book } from 'src/app/shared/models/book';
import { BookService } from 'src/app/core/book.service';

@Component({
  selector: 'app-author-detail',
  templateUrl: './author-detail.component.html',
  styleUrls: ['./author-detail.component.css']
})
export class AuthorDetailComponent implements OnInit {

  books: Book[];
  authorName: string;

  constructor(private bookService : BookService, private route : ActivatedRoute) { }

  ngOnInit(): void {
    let name = this.route.snapshot.paramMap.get("name");
    this.authorName = name;
    this.bookService.getBooksByAuthor(name)
      .subscribe(
        (books : Book[]) => this.books = books
      )
  }

}
