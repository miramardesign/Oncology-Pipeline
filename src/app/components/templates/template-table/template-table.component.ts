import { ITemplateTable, ITrialTableRow } from './../../../models/slide.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-template-table',
  templateUrl: './template-table.component.html',
  styleUrls: ['./template-table.component.scss']
})
export class TemplateTableComponent implements OnInit {

  tableData: ITrialTableRow[];
  @Input() slide: ITemplateTable;

  constructor() { }

  ngOnInit() {
    this.tableData = this.slide.tableData;
  }

}
