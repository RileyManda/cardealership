import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashnavbarComponent } from './dashnavbar.component';

describe('DashnavbarComponent', () => {
  let component: DashnavbarComponent;
  let fixture: ComponentFixture<DashnavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashnavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashnavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
