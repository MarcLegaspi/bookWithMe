import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { ForbiddenEmailValidator, sameAsValidator } from 'src/app/shared/validators/functions';

@Component({
  selector: 'bwm-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.loginForm = this.fb.group({
      email: ['', [
          Validators.required,
          Validators.pattern(this.emailPattern),
          ForbiddenEmailValidator('marcericksonlegaspi@gmail.com')] ],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  // With SameAsValidators
  // initForm() {
  //   this.loginForm = this.fb.group({
  //     email: ['', [
  //         Validators.required,
  //         Validators.pattern(this.emailPattern),
  //         ForbiddenEmailValidator('marcericksonlegaspi@gmail.com')] ],
  //     password: ['', [Validators.required, Validators.minLength(6)]]
  //   }, { validators: [sameAsValidator(['password', 'email'])] });
  // }

  onSubmit() {
    if (this.loginForm.invalid) {
      return;
    }

    console.log(this.loginForm.value);
  }

  get email(): AbstractControl {
    return this.loginForm.get('email');
  }

  get password(): AbstractControl {
    return this.loginForm.get('password');
  }
}
