import { ITemplateTextLeft } from './../../../models/slide.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-template-text-left',
  templateUrl: './template-text-left.component.html',
  styleUrls: ['./template-text-left.component.scss']
})
export class TemplateTextLeftComponent implements OnInit {

  @Input() slide: ITemplateTextLeft;


  constructor() {
  }

  ngOnInit() {
  }

}
