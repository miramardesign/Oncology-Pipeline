import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { M2698Component } from './m2698.component';

describe('M2698Component', () => {
  let component: M2698Component;
  let fixture: ComponentFixture<M2698Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ M2698Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(M2698Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
