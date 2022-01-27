import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopGridComponent } from './top-grid.component';

describe('TopGridComponent', () => {
  let component: TopGridComponent;
  let fixture: ComponentFixture<TopGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
