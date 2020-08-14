import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthorsComponent } from './authors.component';
import { AuthorDetailComponent } from './author-detail/author-detail.component';
import { CreateAuthorComponent } from './create-author/create-author.component';


const routes: Routes = [
  {path: 'authors', component: AuthorsComponent },
  {path: 'authors/:name', component: AuthorDetailComponent },
  {path: 'create-author', component: CreateAuthorComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthorsRoutingModule { }
