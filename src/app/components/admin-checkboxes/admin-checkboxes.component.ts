import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-checkboxes',
  templateUrl: './admin-checkboxes.component.html',
  styleUrls: ['./admin-checkboxes.component.css']
})
export class AdminCheckboxesComponent implements OnInit {
  checked = false;
  indeterminate = false;
  // labelPosition: 'Active' = 'InActive';
  disabled = false;
  constructor() { }

  ngOnInit(): void {
  }

}
