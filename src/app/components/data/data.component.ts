import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styles: []
})
export class DataComponent implements OnInit {

  fg: FormGroup;

  user: Object = {
    fullname: {
      name: "Javier",
      lastname: "Rodriguez"
    },
    email: ""
  }

  constructor() { 

    console.log(this.user);

    this.fg = new FormGroup({

      fullname: new FormGroup({
        name: new FormControl("", [Validators.required, Validators.minLength(3)]),
        lastname: new FormControl("", [Validators.required, Validators.minLength(3)])
      }),
      email: new FormControl("", [Validators.required, Validators.pattern("[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,3}$")])
    });
  }

  ngOnInit() {
  }

  saveForm(){
    console.log(this.fg.value);
  }

}
