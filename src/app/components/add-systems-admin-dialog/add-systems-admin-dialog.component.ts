import { Component, Inject, Optional,OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


export interface UsersData {
  id: number;
  dealershipnum:number;
  dealershipname: string;
  administrator: string;

}


@Component({
  selector: 'app-add-systems-admin-dialog',
  templateUrl: './add-systems-admin-dialog.component.html',
  styleUrls: ['./add-systems-admin-dialog.component.css']
})
export class AddSystemsAdminDialogComponent {


  action:string;
  local_data:any;

  constructor(
    public dialogRef: MatDialogRef<AddSystemsAdminDialogComponent>,
    //@Optional() is used to prevent error if no data is passed
    @Optional() @Inject(MAT_DIALOG_DATA) public data: UsersData) {
    console.log(data);
    this.local_data = {...data};
    this.action = this.local_data.action;
  }

  doAction(){
    this.dialogRef.close({event:this.action,data:this.local_data});
  }

  closeDialog(){
    this.dialogRef.close({event:'Cancel'});
  }

}
