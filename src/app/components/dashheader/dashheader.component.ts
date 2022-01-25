import { Component, OnInit } from '@angular/core';
import { AddAdminDialogComponent } from 'src/app/components/add-admin-dialog/add-admin-dialog.component';
import {MatDialog} from '@angular/material/dialog';
@Component({
  selector: 'app-dashheader',
  templateUrl: './dashheader.component.html',
  styleUrls: ['./dashheader.component.scss']
})
export class DashheaderComponent implements OnInit {

  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(AddAdminDialogComponent);
  }

  ngOnInit(): void {
  }

}
