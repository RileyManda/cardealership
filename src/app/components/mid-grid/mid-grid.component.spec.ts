import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MidGridComponent } from './mid-grid.component';

describe('MidGridComponent', () => {
  let component: MidGridComponent;
  let fixture: ComponentFixture<MidGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MidGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MidGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
