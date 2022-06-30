import { Component, OnInit,NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { User } from '../../_models';
import { AccountService } from '../../services';
import { AddSystemsAdminDialogComponent } from '../../components/add-systems-admin-dialog/add-systems-admin-dialog.component';
import {MatDialog} from '@angular/material/dialog';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

  user: User;
  header: DashboardComponent;

  constructor(private accountService: AccountService,public dialog: MatDialog) {
      this.user = this.accountService.userValue;
  }

  ngOnInit(): void {
  }


  openDialog() {
    this.dialog.open(AddSystemsAdminDialogComponent);
  }

  logout() {
    this.accountService.logout();
}

}
