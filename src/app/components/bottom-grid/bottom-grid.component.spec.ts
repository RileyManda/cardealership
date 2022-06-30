import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomGridComponent } from './bottom-grid.component';

describe('BottomGridComponent', () => {
  let component: BottomGridComponent;
  let fixture: ComponentFixture<BottomGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BottomGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BottomGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
