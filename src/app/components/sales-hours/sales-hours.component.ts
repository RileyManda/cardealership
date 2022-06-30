import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MediaMatcher } from '@angular/cdk/layout';

export interface ChipColor {
  name: string;
}

@Component({
  selector: 'app-sales-hours',
  templateUrl: './sales-hours.component.html',
  styleUrls: ['./sales-hours.component.css'],
})
export class SalesHoursComponent {
  mobileQuery: MediaQueryList;
  time: any;
  isShow = false;
  isNotVisible = true;
  toggleDisplay() {
    this.isShow = !this.isShow;
    this.isNotVisible = !this.isNotVisible;
  }
  fillerNav = Array(50)
    .fill(0)
    .map((_, i) => `Nav Item ${i + 1}`);

  closed = ['Closed', 'Closed', 'Closed', 'Closed', 'Closed', 'Closed'];
  open = ['Open', 'Open', 'Open', 'Open', 'Open', 'Open'];
  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 300px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addEventListener;
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeEventListener;
  }

  businessHours: Array<{ id: number; day: string; btn: string }> = [
    { id: 1, day: 'Monday', btn: 'hello' },
    { id: 2, day: 'Tuesday', btn: 'hello' },
    { id: 3, day: 'Wednesday', btn: 'hello' },
    { id: 4, day: 'Thursday', btn: 'hello' },
    { id: 5, day: 'Friday', btn: 'hello' },
    { id: 6, day: 'Saturday', btn: 'hello' },
    { id: 7, day: 'Sunday', btn: 'hello' },
  ];


  // hoursSelection: Array<{ id: number; hours:Date}> = [
  //   { id: 1, hours: 'Monday' },
  //   { id: 2, hours: 'Tuesday'},
  //   { id: 3, hours: 'Wednesday' },
  //   { id: 4, hours: 'Thursday'},
  //   { id: 5, hours: 'Friday'},
  //   { id: 6, hours: 'Saturday' },
  //   { id: 7, hours: 'Sunday' },
  // ];
}
