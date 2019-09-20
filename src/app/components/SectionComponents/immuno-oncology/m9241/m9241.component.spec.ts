import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { M9241Component } from './m9241.component';

describe('M9241Component', () => {
  let component: M9241Component;
  let fixture: ComponentFixture<M9241Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ M9241Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(M9241Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
