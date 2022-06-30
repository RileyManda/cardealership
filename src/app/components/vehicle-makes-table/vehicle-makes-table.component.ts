import { Component, OnInit,AfterViewInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {SelectionModel} from '@angular/cdk/collections';
import {MatDialog} from '@angular/material/dialog';
import { VehicleMakesDialogComponent } from '../vehicle-makes-dialog/vehicle-makes-dialog.component';
export interface UserData {
  id: number;
  name: string;
  action: string;
}
/** Constants used to fill up our data base. */
const ELEMENT_DATA: UserData[] = [
  {id :1,name: 'Rob',action: '+'},
];
const VehicleName: string[] = [
  'Audi',
  'BMW',
  'Mercedes',
];



const Action: string[] = [
''
];
@Component({
  selector: 'app-vehicle-makes-table',
  templateUrl: './vehicle-makes-table.component.html',
  styleUrls: ['./vehicle-makes-table.component.scss']
})
export class VehicleMakesTableComponent   implements AfterViewInit {

  displayedColumns: string[] = ['select','id','name','action'];
  dataSource= new MatTableDataSource<UserData>(ELEMENT_DATA);
  selection = new SelectionModel<UserData>(true, []);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  constructor(public dialog: MatDialog) {
    const users = Array.from({length: 100}, (_, k) => createNewUser(k + 1));


    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(users);
  }
  openVehicleDialog() {
    this.dialog.open(VehicleMakesDialogComponent);
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

  const name =
    VehicleName[Math.round(Math.random() * (VehicleName.length - 1))] +
    ' ' +
    VehicleName[Math.round(Math.random() * (VehicleName.length - 1))].charAt(0) +
    '.';

    const action =
    Action[Math.round(Math.random() * (Action.length - 1))] +
    ' ' +
    Action[Math.round(Math.random() * (Action.length - 1))].charAt(0) +
    '.';


  return {
    id: id,
    name: VehicleName[Math.round(Math.random() * (VehicleName.length - 1))],
    action: action,
  };


}






