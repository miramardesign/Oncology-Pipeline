export interface INavPage {
  title?: string;
  subtitle?: string;
  footer?: string;
}
export interface ISection{
  title:string;
  subTitle:string;
  phase:number;
  path:string;
  
}

export interface IWelcomePage {
  mainTitle: string;
  sections:ISection[];
  btnImg: string;
  video?: string;
  color: string;
  arrowImage:string;
 
}


