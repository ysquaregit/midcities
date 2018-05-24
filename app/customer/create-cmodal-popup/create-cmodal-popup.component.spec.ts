import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCmodalPopupComponent } from './create-cmodal-popup.component';

describe('CreateCmodalPopupComponent', () => {
  let component: CreateCmodalPopupComponent;
  let fixture: ComponentFixture<CreateCmodalPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateCmodalPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCmodalPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
