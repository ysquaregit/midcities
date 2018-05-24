import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDeadlineComponent } from './create-deadline.component';

describe('CreateDeadlineComponent', () => {
  let component: CreateDeadlineComponent;
  let fixture: ComponentFixture<CreateDeadlineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateDeadlineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateDeadlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
