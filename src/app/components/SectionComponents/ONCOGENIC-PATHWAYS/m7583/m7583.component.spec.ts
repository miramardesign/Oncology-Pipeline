import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { M7583Component } from './m7583.component';

describe('M7583Component', () => {
  let component: M7583Component;
  let fixture: ComponentFixture<M7583Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ M7583Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(M7583Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
