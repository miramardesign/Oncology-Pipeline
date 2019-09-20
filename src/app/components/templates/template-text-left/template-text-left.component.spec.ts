import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateTextLeftComponent } from './template-text-left.component';

describe('TemplateTextLeftComponent', () => {
  let component: TemplateTextLeftComponent;
  let fixture: ComponentFixture<TemplateTextLeftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateTextLeftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateTextLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
