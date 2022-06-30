import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableAdminButtonsComponent } from './table-admin-buttons.component';

describe('TableAdminButtonsComponent', () => {
  let component: TableAdminButtonsComponent;
  let fixture: ComponentFixture<TableAdminButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableAdminButtonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableAdminButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
