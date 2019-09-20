import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TepotinibComponent } from './tepotinib.component';

describe('TepotinibComponent', () => {
  let component: TepotinibComponent;
  let fixture: ComponentFixture<TepotinibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TepotinibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TepotinibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
