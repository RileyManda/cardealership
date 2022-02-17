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


//   displayedColumns: string[] = ['select','id','dealership','administrator','action'];
//   dataSource= new MatTableDataSource<UserData>(ELEMENT_DATA);
//   selection = new SelectionModel<UserData>(true, []);
//   @ViewChild(MatPaginator) paginator: MatPaginator;
//   @ViewChild(MatSort) sort: MatSort;


//   constructor(public dialog: MatDialog) {
//     const users = Array.from({length: 100}, (_, k) => createNewUser(k + 1));


//     // Assign the data to the data source for the table to render
//     this.dataSource = new MatTableDataSource(users);
//   }

//   // add admin chip functions


//   addOnBlur = true;
//   readonly separatorKeysCodes = [ENTER, COMMA] as const;
//   admins: Admins[] = [{name: 'Malinda Barrett'}];

//   add(event: MatChipInputEvent): void {
//     const value = (event.value || '').trim();

//     // Add admin
//     if (value) {
//       this.admins.push({name: value});
//     }

//     // Clear the input value
//     event.chipInput!.clear();
//   }

//   remove(admins: Admins): void {
//     const index = this.admins.indexOf(admins);

//     if (index >= 0) {
//       this.admins.splice(index, 1);
//     }
//   }

//   // dialogs
//   openEditDialog() {
//     this.dialog.open(EditAdminDialogComponent);
//   }
//   ngAfterViewInit() {
//     this.dataSource.paginator = this.paginator;
//     this.dataSource.sort = this.sort;
//   }
//   applyFilter(event: Event) {
//     const filterValue = (event.target as HTMLInputElement).value;
//     this.dataSource.filter = filterValue.trim().toLowerCase();

//     if (this.dataSource.paginator) {
//       this.dataSource.paginator.firstPage();
//     }
//   }

//   /** Whether the number of selected elements matches the total number of rows. */
//   isAllSelected() {
//     const numSelected = this.selection.selected.length;
//     const numRows = this.dataSource.data.length;
//     return numSelected === numRows;
//   }

//   /** Selects all rows if they are not all selected; otherwise clear selection. */
//   masterToggle() {
//     if (this.isAllSelected()) {
//       this.selection.clear();
//       return;
//     }

//     this.selection.select(...this.dataSource.data);
//   }
//   /** The label for the checkbox on the passed row */
//   checkboxLabel(row?: UserData): string {
//     if (!row) {
//       return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
//     }
//     return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.id + 1}`;
//   }
// }
// /** Builds and returns a new User. */
// function createNewUser(id: number): UserData {

//   const dealership =
//   Dealership[Math.round(Math.random() * (Dealership.length - 1))] +
//   ' ' +
//   Dealership[Math.round(Math.random() * (Dealership.length - 1))].charAt(0) +
//   '.';

//     const administrator =
//     Administrator[Math.round(Math.random() * (Administrator.length - 1))] +
//     ' ' +
//     Administrator[Math.round(Math.random() * (Administrator.length - 1))].charAt(0) +
//     '.';

//     const action =
//     Action[Math.round(Math.random() * (Action.length - 1))] +
//     ' ' +
//     Action[Math.round(Math.random() * (Action.length - 1))].charAt(0) +
//     '.';


//   return {
//     id: id,
//     dealership: dealership,
//     administrator: Administrator[Math.round(Math.random() * (Administrator.length - 1))],
//     action: action,
//   };







