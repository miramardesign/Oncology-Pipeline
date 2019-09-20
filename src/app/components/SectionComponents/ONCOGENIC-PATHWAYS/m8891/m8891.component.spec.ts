import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { M8891Component } from './m8891.component';

describe('M8891Component', () => {
  let component: M8891Component;
  let fixture: ComponentFixture<M8891Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ M8891Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(M8891Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
