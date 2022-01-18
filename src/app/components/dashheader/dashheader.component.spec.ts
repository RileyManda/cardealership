import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashheaderComponent } from './dashheader.component';

describe('DashheaderComponent', () => {
  let component: DashheaderComponent;
  let fixture: ComponentFixture<DashheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashheaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
