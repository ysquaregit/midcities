import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSelectedComponent } from './edit-selected.component';

describe('EditSelectedComponent', () => {
  let component: EditSelectedComponent;
  let fixture: ComponentFixture<EditSelectedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditSelectedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSelectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
