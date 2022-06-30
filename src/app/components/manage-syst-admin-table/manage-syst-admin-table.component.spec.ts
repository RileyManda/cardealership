import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageSystemsAdminTableComponent } from './manage-syst-admin-table.component';

describe('ManageSystemsAdminTableComponent', () => {
  let component: ManageSystemsAdminTableComponent;
  let fixture: ComponentFixture<ManageSystemsAdminTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageSystemsAdminTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageSystemsAdminTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
