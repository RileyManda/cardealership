import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../_models';
import { AccountService } from '../../services';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent{
  user: User;
  constructor(private accountService: AccountService) {
    this.user = this.accountService.userValue;
}

  ngOnInit(): void {
  }


}
