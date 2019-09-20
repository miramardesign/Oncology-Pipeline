import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavScreenComponent } from './nav-screen.component';

describe('NavScreenComponent', () => {
  let component: NavScreenComponent;
  let fixture: ComponentFixture<NavScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
