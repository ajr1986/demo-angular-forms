import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styles: [`
    .ng-invalid.ng-touched:not(form) {
      border: 1px solid red;
    }
  `]
})
export class TemplateComponent implements OnInit {

  user: any = {
    name: null,
    lastname: null,
    email: null,
    country: "",
    gender: null,
    acept: false
  };

  countries = [
    {code: "ARG", name: "Argentina"},
    {code: "BRA", name: "Brasil"},
  ]

  constructor() { }

  ngOnInit() {
  }

  save(form: NgForm){
    console.log(form);
    console.log("Form", form.value);
    console.log("User", this.user);
  }

}
