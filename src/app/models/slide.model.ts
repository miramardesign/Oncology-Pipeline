import { ITemplateTable } from './slide.model';

export interface ITemplateTextLeft {
  text: string;
  image: string;
}

export interface ITemplateImageMiddle {
  topText?: string;
  image?: string;
  bottomText?: string;
}

export interface ITrialTableField {
  text?: string;
  cellClass?: string;
  colSpan?: number;
  emptyCell?: boolean;
}
export interface ITrialTableRow {
  rowClass?: string;
  tableRow: ITrialTableField[];
}

export interface ITemplateTable extends ITemplateImageMiddle {
  tableLegend?: string;
  tableData: ITrialTableRow[];
}

export interface ITemplateColumn {
  topText?: string;
  topTextClass?: string;
  topImage?: string;
  topImageClass?: string;
  middleText?: string;
  middleTextClass?: string;
  middleImage?: string;
  middleImageClass?: string;
  bottomText?: string;
  bottomTextClass?: string;
  bottomImage?: string;
  bottomImageClass?: string;
}

export interface ITemplateImageTextColumns {
  column1: ITemplateColumn;
  column2?: ITemplateColumn;
}

export interface ISlide {
  id: number;
  slideClass: string;
  slideGroups: Array<string>;
  title?: string;
  subtitle?: string;
  category: string;
  templateTextLeft?: ITemplateTextLeft;
  templateImageMiddle?: ITemplateImageMiddle;
  templateTable?: ITemplateTable;
  templateImageTextColumns?: ITemplateImageTextColumns;
  footer?: string;
}
