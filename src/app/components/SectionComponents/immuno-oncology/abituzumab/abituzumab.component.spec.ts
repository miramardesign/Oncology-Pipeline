import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbituzumabComponent } from './abituzumab.component';

describe('AbituzumabComponent', () => {
  let component: AbituzumabComponent;
  let fixture: ComponentFixture<AbituzumabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbituzumabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbituzumabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
