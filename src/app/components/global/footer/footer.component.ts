import { Component, OnInit, Input } from '@angular/core'
import { ZincCode } from '../../../data/content.data';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  zincCodeNum: string = ZincCode;
  @Input() footerContent: string;
  @Input() tableLegend: boolean;
  @Input() homeFooter: string;

  constructor() { }

  ngOnInit() {
  }

}
