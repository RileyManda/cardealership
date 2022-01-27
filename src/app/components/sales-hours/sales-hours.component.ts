import { Component, OnInit } from '@angular/core';
import {ThemePalette} from '@angular/material/core';
export interface ChipColor {
  name: string;
  color: ThemePalette;
}
@Component({
  selector: 'app-sales-hours',
  templateUrl: './sales-hours.component.html',
  styleUrls: ['./sales-hours.component.css']
})
export class SalesHoursComponent implements OnInit {

  constructor() { }
  availableColors: ChipColor[] = [
    {name: 'Closed', color: undefined},
    {name: 'Closed', color: 'primary'},
    {name: 'Closed', color: 'accent'},
    {name: 'Closed', color: 'warn'},
  ];
  ngOnInit(): void {
  }

}
