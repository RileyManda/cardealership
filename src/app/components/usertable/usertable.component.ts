import { Component, OnInit,AfterViewInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {SelectionModel} from '@angular/cdk/collections';
import { EditAdminDialogComponent } from '../edit-admin-dialog/edit-admin-dialog.component';
import {MatDialog} from '@angular/material/dialog';
import {MatChipInputEvent} from '@angular/material/chips';
import {COMMA, ENTER} from '@angular/cdk/keycodes';

export interface UserData {
  id: number;
  dealership: string;
  administrator: string;
  action: string;
}



export interface Admins {
  name: string;
}
/** Constants used to fill up our data base. */
const ELEMENT_DATA: UserData[] = [
  {id :1, dealership: 'Maia',administrator: 'John',action: '+'},
  {id :1, dealership: 'Asher',administrator: 'Asher',action: '+'},
];

const Dealership: string[] = [
  'Maia',
  'Asher',
  'Olivia',
  'Atticus',
  'Amelia',
  'Jack',
  'Charlotte',
  'Theodore',
  'Isla',
  'Oliver',
  'Isabella',
  'Jasper',
  'Cora',
  'Levi',
  'Violet',
  'Arthur',
  'Mia',
  'Thomas',
  'Elizabeth',
];
const DealershipName: string[] = [
  'MiaA',
  'Asher',
  'Olivia',
  'Atticus',
  'Amelia',
  'Jack',
  'Charlotte',
  'Theodore',
  'Isla',
  'Oliver',
  'Isabella',
  'Jasper',
  'Cora',
  'Levi',
  'Violet',
  'Arthur',
  'Mia',
  'Thomas',
  'Elizabeth',
];
const Administrator: string[] = [
  'MiaA',
  'Asher',
  'Olivia',
  'Atticus',
  'Amelia',
  'Jack',
  'Charlotte',
  'Theodore',
  'Isla',
  'Oliver',
  'Isabella',
  'Jasper',
  'Cora',
  'Levi',
  'Violet',
  'Arthur',
  'Mia',
  'Thomas',
  'Elizabeth'
];


const Action: string[] = [
  'Maia',
  'Asher',
  'Olivia',
  'Atticus',
];
@Component({
  selector: 'app-usertable',
  templateUrl: './usertable.component.html',
  styleUrls: ['./usertable.component.scss']
})
export class UsertableComponent implements AfterViewInit {
  displayedColumns: string[] = ['select','id','dealership','administrator','action'];
  dataSource= new MatTableDataSource<UserData>(ELEMENT_DATA);
  selection = new SelectionModel<UserData>(true, []);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  constructor(public dialog: MatDialog) {
    const users = Array.from({length: 100}, (_, k) => createNewUser(k + 1));


    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(users);
  }

  // add admin chip functions


  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  admins: Admins[] = [{name: 'Malinda Barrett'}];

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add admin
    if (value) {
      this.admins.push({name: value});
    }

    // Clear the input value
    event.chipInput!.clear();
  }

  remove(admins: Admins): void {
    const index = this.admins.indexOf(admins);

    if (index >= 0) {
      this.admins.splice(index, 1);
    }
  }

  // dialogs
  openEditDialog() {
    this.dialog.open(EditAdminDialogComponent);
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource.data);
  }
  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: UserData): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.id + 1}`;
  }
}
/** Builds and returns a new User. */
function createNewUser(id: number): UserData {

  const dealership =
  Dealership[Math.round(Math.random() * (Dealership.length - 1))] +
  ' ' +
  Dealership[Math.round(Math.random() * (Dealership.length - 1))].charAt(0) +
  '.';

    const administrator =
    Administrator[Math.round(Math.random() * (Administrator.length - 1))] +
    ' ' +
    Administrator[Math.round(Math.random() * (Administrator.length - 1))].charAt(0) +
    '.';

    const action =
    Action[Math.round(Math.random() * (Action.length - 1))] +
    ' ' +
    Action[Math.round(Math.random() * (Action.length - 1))].charAt(0) +
    '.';


  return {
    id: id,
    dealership: dealership,
    administrator: Administrator[Math.round(Math.random() * (Administrator.length - 1))],
    action: action,
  };



}




