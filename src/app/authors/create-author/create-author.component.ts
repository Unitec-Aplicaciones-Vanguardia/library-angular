import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthorService } from 'src/app/core/author.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-author',
  templateUrl: './create-author.component.html',
  styleUrls: ['./create-author.component.css']
})
export class CreateAuthorComponent implements OnInit {

  form: FormGroup;

  constructor(private authorService : AuthorService, private router : Router) { }

  ngOnInit(): void {
    this.form = this.createForm();
  }

  createForm() : FormGroup{
    return new FormGroup({
      name: new FormControl("", Validators.required),
      age: new FormControl(0, Validators.required)
    });
  }

  onSubmit(){
    const author = this.form.value;
    this.authorService.addAuthor({
      name: author.name,
      age: author.age,
      id: 0
    })
    .subscribe((data : any) => this.router.navigate(["/authors"]));
  }
}
