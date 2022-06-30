import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DealershipPrinscipleComponent } from './dealership-prinsciple.component';

describe('DealershipPrinscipleComponent', () => {
  let component: DealershipPrinscipleComponent;
  let fixture: ComponentFixture<DealershipPrinscipleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DealershipPrinscipleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DealershipPrinscipleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
