import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSystemsAdminDialogComponent } from './add-systems-admin-dialog.component';

describe('AddSystemsAdminDialogComponent', () => {
  let component: AddSystemsAdminDialogComponent;
  let fixture: ComponentFixture<AddSystemsAdminDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSystemsAdminDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSystemsAdminDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
