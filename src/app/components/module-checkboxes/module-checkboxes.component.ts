import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-module-checkboxes',
  templateUrl: './module-checkboxes.component.html',
  styleUrls: ['./module-checkboxes.component.css']
})
export class ModuleCheckboxesComponent implements OnInit {
  checked = false;
  indeterminate = false;
  labelPosition: 'before' | 'after' = 'after';
  disabled = false;

  constructor() { }

  ngOnInit(): void {
  }

}
