import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertSelfClosingComponent } from './alert-self-closing.component';

describe('AlertSelfClosingComponent', () => {
  let component: AlertSelfClosingComponent;
  let fixture: ComponentFixture<AlertSelfClosingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlertSelfClosingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertSelfClosingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
