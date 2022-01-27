import { Component, OnInit } from '@angular/core';
import {ThemePalette} from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';


export interface ChipColor {
  name: string;


}
@Component({
  selector: 'app-sales-hours',
  templateUrl: './sales-hours.component.html',
  styleUrls: ['./sales-hours.component.css']
})
export class SalesHoursComponent implements OnInit {

  constructor() { }
  chips: ChipColor[] = [

    {name: 'Closed'}
  ];
  ngOnInit(): void {
  }

}
