import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageSystemsAdministratorComponent } from './manage-systems-administrator.component';

describe('ManageSystemsAdministratorComponent', () => {
  let component: ManageSystemsAdministratorComponent;
  let fixture: ComponentFixture<ManageSystemsAdministratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageSystemsAdministratorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageSystemsAdministratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
