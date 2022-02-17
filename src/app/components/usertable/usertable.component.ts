import { Component, OnInit,AfterViewInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {SelectionModel} from '@angular/cdk/collections';
import { EditAdminDialogComponent } from '../edit-admin-dialog/edit-admin-dialog.component';
import {MatChipInputEvent} from '@angular/material/chips';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { MatTable } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { AddDealershipAdminDialogComponent } from '../add-dealership-admin-dialog/add-dealership-admin-dialog.component';
import { AddSystemsAdminDialogComponent } from '../add-systems-admin-dialog/add-systems-admin-dialog.component';



export interface UsersData {
  id: number;
  dealershipnum:number;
  dealershipname: string;
  administrator: string;

}

const ELEMENT_DATA: UsersData[] = [
  {id:0,dealershipnum: 1560608769632, dealershipname: 'John',administrator:'Doe'},
];


// dont touch this---
@Component({
  selector: 'app-usertable',
  templateUrl: './usertable.component.html',
  styleUrls: ['./usertable.component.scss']
})



export class UsertableComponent  {
  displayedColumns: string[] = ['id','dealershipnum','dealershipname','administrator','action'];
  dataSource= ELEMENT_DATA;
  selection = new SelectionModel<UsersData>(true, []);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable,{static:true}) table: MatTable<any>;

  constructor(public dialog: MatDialog) {}

  openDialog(action,obj) {
    obj.action = action;
    const dialogRef = this.dialog.open(EditAdminDialogComponent, {

      data:obj
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result.event == 'Add Details'){
        this.addRowData(result.data);
      }else if(result.event == 'Update Details'){
        this.updateRowData(result.data);
      }else if(result.event == 'Delete'){
        this.deleteRowData(result.data);
      }
    });
  }

  addDealership(action,obj) {
    obj.action = action;
    const dialogRef = this.dialog.open(EditAdminDialogComponent, {

      data:obj
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result.event == 'Add Details'){
        this.addRowData(result.data);
      }else if(result.event == 'Update Details'){
        this.updateRowData(result.data);
      }else if(result.event == 'Delete'){
        this.deleteRowData(result.data);
      }
    });
  }

  addSysAdmin(action,obj) {
    obj.action = action;
    const dialogRef = this.dialog.open(AddSystemsAdminDialogComponent, {

      data:obj
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result.event == 'Add Details'){
        this.addRowData(result.data);
      }else if(result.event == 'Update Details'){
        this.updateRowData(result.data);
      }else if(result.event == 'Delete'){
        this.deleteRowData(result.data);
      }
    });
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
  deleteRowData(row_obj){
    this.dataSource = this.dataSource.filter((value,key)=>{
      return value.id != row_obj.id && value.dealershipnum != row_obj.dealershipnum;
    });
  }





}

