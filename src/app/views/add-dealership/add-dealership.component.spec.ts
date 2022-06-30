import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDealershipComponent } from './add-dealership.component';

describe('AddDealershipComponent', () => {
  let component: AddDealershipComponent;
  let fixture: ComponentFixture<AddDealershipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDealershipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDealershipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
