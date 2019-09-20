import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImmunoOncologyBintrafuspComponent } from './bintrafusp.component';

describe('ImmunoOncologyBintrafuspComponent', () => {
  let component: ImmunoOncologyBintrafuspComponent;
  let fixture: ComponentFixture<ImmunoOncologyBintrafuspComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImmunoOncologyBintrafuspComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImmunoOncologyBintrafuspComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
