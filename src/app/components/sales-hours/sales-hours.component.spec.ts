import { ComponentFixture, TestBed } from '@angular/core/testing';
import {ThemePalette} from '@angular/material/core';
import { SalesHoursComponent } from './sales-hours.component';


describe('SalesHoursComponent', () => {
  let component: SalesHoursComponent;
  let fixture: ComponentFixture<SalesHoursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalesHoursComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesHoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


});
