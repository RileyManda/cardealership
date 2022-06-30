import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleMakesTableComponent } from './vehicle-makes-table.component';

describe('VehicleMakesTableComponent', () => {
  let component: VehicleMakesTableComponent;
  let fixture: ComponentFixture<VehicleMakesTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehicleMakesTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleMakesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
