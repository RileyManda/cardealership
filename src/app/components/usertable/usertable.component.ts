import { Component, OnInit,AfterViewInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {SelectionModel} from '@angular/cdk/collections';
import { EditAdminDialogComponent } from '../edit-admin-dialog/edit-admin-dialog.component';
import {MatDialog} from '@angular/material/dialog';

export interface UserData {
  id: number;
  dealership: string;
  name: string;
  administrator: string;
  action: string;
}
/** Constants used to fill up our data base. */
const ELEMENT_DATA: UserData[] = [
  {id :1, dealership: 'Maia',name: 'Maia',administrator: 'John',action: '+'},
  {id :1, dealership: 'Asher',name: 'Olivia',administrator: 'Asher',action: '+'},
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
  displayedColumns: string[] = ['select','id','dealership', 'name','administrator','action'];
  dataSource= new MatTableDataSource<UserData>(ELEMENT_DATA);
  selection = new SelectionModel<UserData>(true, []);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  constructor(public dialog: MatDialog) {
    const users = Array.from({length: 100}, (_, k) => createNewUser(k + 1));


    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(users);
  }
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

  const name =
    DealershipName[Math.round(Math.random() * (DealershipName.length - 1))] +
    ' ' +
    DealershipName[Math.round(Math.random() * (DealershipName.length - 1))].charAt(0) +
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
    name: name,
    administrator: Administrator[Math.round(Math.random() * (Administrator.length - 1))],
    action: action,
  };



}




