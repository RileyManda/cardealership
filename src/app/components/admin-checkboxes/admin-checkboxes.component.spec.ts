import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCheckboxesComponent } from './admin-checkboxes.component';

describe('AdminCheckboxesComponent', () => {
  let component: AdminCheckboxesComponent;
  let fixture: ComponentFixture<AdminCheckboxesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminCheckboxesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCheckboxesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
