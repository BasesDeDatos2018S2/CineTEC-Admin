import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewProtagonistsComponent } from './view-protagonists.component';

describe('ViewProtagonistsComponent', () => {
  let component: ViewProtagonistsComponent;
  let fixture: ComponentFixture<ViewProtagonistsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewProtagonistsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewProtagonistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
