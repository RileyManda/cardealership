import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageVehicleMakesComponent } from './manage-vehicle-makes.component';

describe('ManageVehicleMakesComponent', () => {
  let component: ManageVehicleMakesComponent;
  let fixture: ComponentFixture<ManageVehicleMakesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageVehicleMakesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageVehicleMakesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
