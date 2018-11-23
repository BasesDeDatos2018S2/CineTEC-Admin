import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCinemasComponent } from './view-cinemas.component';

describe('ViewCinemasComponent', () => {
  let component: ViewCinemasComponent;
  let fixture: ComponentFixture<ViewCinemasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewCinemasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewCinemasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
