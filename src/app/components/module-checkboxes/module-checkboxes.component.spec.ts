import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleCheckboxesComponent } from './module-checkboxes.component';

describe('ModuleCheckboxesComponent', () => {
  let component: ModuleCheckboxesComponent;
  let fixture: ComponentFixture<ModuleCheckboxesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModuleCheckboxesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuleCheckboxesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
