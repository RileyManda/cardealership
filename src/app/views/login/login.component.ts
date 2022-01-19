import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  router: any;

  constructor() { }

  ngOnInit(): void {
  }

  gotToDashBoard=  () => {
    this.router.navigateByUrl('/dashboard');
};

}
