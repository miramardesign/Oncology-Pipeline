import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PipelineCompoundsComponent } from './pipeline-compounds.component';

describe('PipelineCompoundsComponent', () => {
  let component: PipelineCompoundsComponent;
  let fixture: ComponentFixture<PipelineCompoundsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PipelineCompoundsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PipelineCompoundsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
