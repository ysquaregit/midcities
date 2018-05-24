import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateModalPopupComponent } from './create-modal-popup.component';

describe('CreateModalPopupComponent', () => {
  let component: CreateModalPopupComponent;
  let fixture: ComponentFixture<CreateModalPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateModalPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateModalPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
