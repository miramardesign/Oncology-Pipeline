import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateImageTextColumnsComponent } from './template-image-text-columns.component';

describe('TemplateImageTextColumnsComponent', () => {
  let component: TemplateImageTextColumnsComponent;
  let fixture: ComponentFixture<TemplateImageTextColumnsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateImageTextColumnsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateImageTextColumnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
