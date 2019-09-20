import { Component, Input, OnInit, AfterViewInit } from '@angular/core';
import {WelcomeComponent} from '../../welcome/welcome.component';
import { getButtonImageColor } from 'src/app/data/content.data';
@Component({
    selector : 'navigation-footer',
    templateUrl : './navigation-footer.component.html'
})
export class NavigationFooter  implements OnInit {
    @Input('navigationPanes') navigationPaneData;
    ngOnInit(){

    }
    color;
    backbuttonsrc;
    nextbuttonsrc;
    constructor() {
        this.color = getButtonImageColor();
        if(this.color=="skyblue")
        {
            this.backbuttonsrc='assets/buttons/back-onco-path-btn.png';
            this.nextbuttonsrc='assets/buttons/next-onco-path-btn.png';
        }
        else if(this.color=="yellow")
        {
            this.backbuttonsrc='assets/buttons/back-ddri-btn.png';
            this.nextbuttonsrc='assets/buttons/next-ddri-btn.png';
        }
        else
        {
            this.backbuttonsrc='assets/buttons/back-immuno-onc-btn.png';
            this.nextbuttonsrc='assets/buttons/next-immuno-onc-btn.png';
        }
    }
    generateArray = WelcomeComponent.prototype.generateArray
}