import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  login? :  FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.login=new FormGroup({
      name: new FormControl,
      email: new FormControl
    })
  }

}

