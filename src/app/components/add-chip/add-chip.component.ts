import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {MatChipInputEvent} from '@angular/material/chips';
@Component({
  selector: 'app-add-chip',
  templateUrl: './add-chip.component.html',
  styleUrls: ['./add-chip.component.css']
})
export class AddChipComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  keywords = new Set(['angular', 'how-to', 'tutorial']);
  formControl = new FormControl(['angular']);

  addKeywordFromInput(event: MatChipInputEvent) {
    if (event.value) {
      this.keywords.add(event.value);
      event.chipInput!.clear();
    }
  }

  removeKeyword(keyword: string) {
    this.keywords.delete(keyword);
  }
}


