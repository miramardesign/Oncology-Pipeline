import { TrialService } from './../../services/trial.service';
import { ISlide } from './../../models/slide.model';
import { SlideData } from './../../data/slides.data';
import { Component, OnInit, Input, ViewChild } from '@angular/core';
import {
  SwiperDirective, SwiperConfigInterface,
} from 'ngx-swiper-wrapper';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators'


@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  @ViewChild(SwiperDirective) directiveRef: SwiperDirective;
  slides: ISlide[];
  sliderConfig = {
    slideImgPath: 'assets/images/slides',
    slider: {
      a11y: true,
      direction: 'horizontal',
      effect: 'fade',
      slidesPerView: 1,
      keyboard: true,
      mousewheel: false,
      scrollbar: false,
      navigation: true,
      pagination: false,
      speed: 1500,
    }
  };
  public config: SwiperConfigInterface = this.sliderConfig.slider;

  constructor(
    private activatedRoute: ActivatedRoute,
    private trialService: TrialService,
  ) {

  }

  ngOnInit() {
    this.subscribeToSlides();
  }

  subscribeToSlides() {
    return this.activatedRoute.params.pipe(take(1)).subscribe(params => {
      this.slides = this.trialService.getTrialSlidesByGroupName(SlideData, params[ 'group' ]);
    });
  }

  getCategoryIconPath(slide: ISlide): string {
    return `assets/images/${ slide.category }/${ slide.category }-icon.png`;
  }

  isFooterTableLegend(slide: ISlide): boolean {
    return slide.templateTable ? true : false;
  }

  goToSlide(slideId: number) {
    this.directiveRef.setIndex(slideId, 0, true);
  }

  goToNextSlide() {
    this.directiveRef.nextSlide();
  }

  goToPreviousSlide() {
    this.directiveRef.prevSlide();
  }

}
