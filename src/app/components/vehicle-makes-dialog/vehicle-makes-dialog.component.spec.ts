import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleMakesDialogComponent } from './vehicle-makes-dialog.component';

describe('VehicleMakesDialogComponent', () => {
  let component: VehicleMakesDialogComponent;
  let fixture: ComponentFixture<VehicleMakesDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehicleMakesDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleMakesDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
