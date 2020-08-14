import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorsComponent } from '../authors/authors.component';
import { AuthorsRoutingModule } from './authors-routing.module';
import { AuthorDetailComponent } from './author-detail/author-detail.component';
import { CreateAuthorComponent } from './create-author/create-author.component';


@NgModule({
  declarations: [ AuthorsComponent, AuthorDetailComponent, CreateAuthorComponent ],
  imports: [
    CommonModule,
    AuthorsRoutingModule
  ]
})
export class AuthorsModule { }
