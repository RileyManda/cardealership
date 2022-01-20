import { Component, OnInit,AfterViewInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
export interface UserData {
  id: string;
  dealership: string;
  name: string;
  administrator: string;
  action: string;
}
/** Constants used to fill up our data base. */


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
const Administrator: string[] = [
  'blueberry',
  'lychee',
  'kiwi',
  'mango',
  'peach',
  'lime',
  'pomegranate',
  'pineapple',
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
  displayedColumns: string[] = ['id','dealership', 'name','administrator','action'];
  dataSource: MatTableDataSource<UserData>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  constructor() {
    // Create 100 users
    const users = Array.from({length: 100}, (_, k) => createNewUser(k + 1));


    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(users);
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
    id: id.toString(),
    dealership: dealership,
    name: name,
    administrator: Administrator[Math.round(Math.random() * (Administrator.length - 1))],
    action: action,
  };
}




