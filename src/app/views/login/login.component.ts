import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  router: any;
  hide = true;
  constructor() { }

    emailFormControl = new FormControl('', [Validators.required, Validators.email]);
    passwordFormControl = new FormControl('', [Validators.required]);

    matcher = new MyErrorStateMatcher();


  gotToDashBoard=  () => {
    this.router.navigateByUrl('/dashboard');
};

}
