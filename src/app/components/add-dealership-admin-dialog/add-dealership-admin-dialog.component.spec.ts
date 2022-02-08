import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDealershipAdminDialogComponent } from './add-dealership-admin-dialog.component';

describe('AddDealershipAdminDialogComponent', () => {
  let component: AddDealershipAdminDialogComponent;
  let fixture: ComponentFixture<AddDealershipAdminDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDealershipAdminDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDealershipAdminDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
