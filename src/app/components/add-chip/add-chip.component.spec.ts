import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddChipComponent } from './add-chip.component';

describe('AddChipComponent', () => {
  let component: AddChipComponent;
  let fixture: ComponentFixture<AddChipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddChipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddChipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
