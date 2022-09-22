import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor() { }

  signupform!:FormGroup;

  ngOnInit(): void {
    this.signupform=new FormGroup({
      "firstname":new FormControl(),
      "lastname":new FormControl(),
      "email":new FormControl(),
      "password":new FormControl()
    })
  }

}
