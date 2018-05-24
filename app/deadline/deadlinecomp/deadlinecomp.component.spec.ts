import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeadlinecompComponent } from './deadlinecomp.component';

describe('DeadlinecompComponent', () => {
  let component: DeadlinecompComponent;
  let fixture: ComponentFixture<DeadlinecompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeadlinecompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeadlinecompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
