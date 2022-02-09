import { Component, OnInit } from '@angular/core';
import { AddSystemsAdminDialogComponent } from 'src/app/components/add-systems-admin-dialog/add-systems-admin-dialog.component';
import { User } from '../../_models';
import { AccountService } from '../../services';
import {MatDialog} from '@angular/material/dialog';
@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.css']
})
export class MainHeaderComponent implements OnInit {
  user: User;
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
