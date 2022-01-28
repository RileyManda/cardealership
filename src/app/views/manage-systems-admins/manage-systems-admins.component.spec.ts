import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageSystemsAdminsComponent } from './manage-systems-admins.component';

describe('ManageSystemsAdminsComponent', () => {
  let component: ManageSystemsAdminsComponent;
  let fixture: ComponentFixture<ManageSystemsAdminsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageSystemsAdminsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageSystemsAdminsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
