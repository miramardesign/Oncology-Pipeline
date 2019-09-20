import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { M3814Component } from './m3814.component';

describe('M3814Component', () => {
  let component: M3814Component;
  let fixture: ComponentFixture<M3814Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ M3814Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(M3814Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
