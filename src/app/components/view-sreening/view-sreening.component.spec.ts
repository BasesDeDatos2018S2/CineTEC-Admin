import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSreeningComponent } from './view-sreening.component';

describe('ViewSreeningComponent', () => {
  let component: ViewSreeningComponent;
  let fixture: ComponentFixture<ViewSreeningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewSreeningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSreeningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
