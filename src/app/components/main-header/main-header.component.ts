import { Component, OnInit,ViewChild } from '@angular/core';
import { AddSystemsAdminDialogComponent } from 'src/app/components/add-systems-admin-dialog/add-systems-admin-dialog.component';
import { User } from '../../_models';
import { AccountService } from '../../services';
import {MatDialog} from '@angular/material/dialog';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { MatTable } from '@angular/material/table';


export interface UsersData {
  id: number;
  dealershipnum:number;
  dealershipname: string;
  administrator: string;

}

const ELEMENT_DATA: UsersData[] = [
  {id:0,dealershipnum: 1560608769632, dealershipname: 'John',administrator:'Doe'},
];

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.css']
})



export class MainHeaderComponent {
  user: User;
  displayedColumns: string[] = ['id','dealershipnum','dealershipname','administrator','action'];
  dataSource= ELEMENT_DATA;
  @ViewChild(MatTable,{static:true}) table: MatTable<any>;
  constructor(private accountService: AccountService,public dialog: MatDialog) {
      this.user = this.accountService.userValue;
  }
  ngOnInit(): void {
  }

  addAdminDialog(action,obj) {
    obj.action = action;
    const dialogRef = this.dialog.open(AddSystemsAdminDialogComponent, {

      data:obj
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result.event == 'Add'){
        this.addRowData(result.data);
      }else if(result.event == 'Update'){
        this.updateRowData(result.data);
      }
    });
  }
  addRowData(row_obj){
    var d = new Date();
    this.dataSource.push({
      id:d.getTime(),
      dealershipnum:d.getTime(),
      dealershipname:row_obj.dealershipname,
      administrator:row_obj.administrator
    });
    this.table.renderRows();

  }

  updateRowData(row_obj){
    this.dataSource = this.dataSource.filter((value,key)=>{
      if(value.id == row_obj.id && value.dealershipnum == row_obj.dealershipnum  ){
        value.dealershipname = row_obj.dealershipname;
        value.administrator = row_obj.administrator;
      }
      return true;
    });
  }

  getShortName(user) {
    return user.split(' ').map(n => n[0]).join('').toUpperCase();
  }
  logout() {
    this.accountService.logout();
}

}
