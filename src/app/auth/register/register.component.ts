import { Component, OnInit } from '@angular/core';
import { RegisterForm } from '../shared/login-form-model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'bwm-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  // registerFormData: RegisterForm = {
  //   email : '',
  //   password : '',
  //   passwordConfirmation : '',
  //   username : ''
  // };
  registerFormData: RegisterForm;
  emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  constructor() {
  }

  ngOnInit() {
    this.registerFormData = new RegisterForm(); 
  }

  onSubmit(form: NgForm) {
    this.validateInputs(form);

    if (form.invalid) {
      return;
    }

    console.log(this.registerFormData);
  }

  validateInputs(form: NgForm) {
    Object.keys(form.controls).forEach(controlName => {
      form.controls[controlName].markAsDirty();
    });
  }

}
