import { Component, OnInit,ChangeDetectorRef } from '@angular/core';
import {ThemePalette} from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import {MediaMatcher} from '@angular/cdk/layout';

export interface ChipColor {
  name: string;

}


@Component({
  selector: 'app-sales-hours',
  templateUrl: './sales-hours.component.html',
  styleUrls: ['./sales-hours.component.css']
})
export class SalesHoursComponent {
  mobileQuery: MediaQueryList;
  isShow = false;
  isNotVisible = true;
  toggleDisplay() {
    this.isShow = !this.isShow;
    this.isNotVisible = !this.isNotVisible;
  }
  fillerNav = Array(50).fill(0).map((_, i) => `Nav Item ${i + 1}`);

  closed = ["Closed", "Closed", "Closed", "Closed", "Closed", "Closed"]
  open = ["Open", "Open","Open", "Open","Open", "Open"]
  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 300px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

   businessHours: Array<{id: number, day: string,btn:string}> = [
    { id: 1, day: "Monday",btn: "hello"},
    { id: 1, day: "Tuesday",btn: "hello" },
    {id: 1, day: "Wednesday",btn: "hello" },
    { id: 1, day: "Thursday",btn: "hello" },
    { id: 1, day: "Friday",btn: "hello" },
    { id: 1, day: "Saturday",btn: "hello" },
    { id: 1, day: "Sunday",btn: "hello" }
  ];


}







