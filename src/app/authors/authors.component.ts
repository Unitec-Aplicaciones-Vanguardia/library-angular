import { Component, OnInit } from '@angular/core';
import { Author } from '../shared/models/author';
import { AuthorService } from '../core/author.service';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {

  authors : Author[];

  constructor(private authorService : AuthorService) { }

  ngOnInit(): void {
    this.authorService.getAuthors()
      .subscribe(
        (authors : Author[]) => this.authors = authors
      )
  } 
}
