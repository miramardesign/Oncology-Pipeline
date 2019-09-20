import { Component, OnInit, Input } from '@angular/core';
import { ITemplateImageTextColumns, ITemplateColumn } from '../../../models/slide.model';

@Component({
  selector: 'app-template-image-text-columns',
  templateUrl: './template-image-text-columns.component.html',
  styleUrls: ['./template-image-text-columns.component.scss']
})
export class TemplateImageTextColumnsComponent implements OnInit {

  @Input() slide: ITemplateImageTextColumns;
  col1: ITemplateColumn;
  col2: ITemplateColumn;
  isMultipleColumns: boolean;

  constructor() { }

  ngOnInit() {

    this.isMultipleColumns = this.slide.column2 ? true : false;

    this.col1 = this.slide.column1;
    this.col2 = this.slide.column2;

  }

}
