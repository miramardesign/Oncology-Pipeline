import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleHeaderHomeComponent } from './title-header-home.component';

describe('TitleHeaderHomeComponent', () => {
  let component: TitleHeaderHomeComponent;
  let fixture: ComponentFixture<TitleHeaderHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TitleHeaderHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TitleHeaderHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
