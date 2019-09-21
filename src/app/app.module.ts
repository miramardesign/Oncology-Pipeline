import { SliderComponent } from './components/slider/slider.component';
import { TrialService } from './services/trial.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/global/footer/footer.component';
import { NavScreenComponent } from './components/nav-screen/nav-screen.component';

import { SwiperModule } from 'ngx-swiper-wrapper';
import { SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { TemplateTextLeftComponent } from './components/templates/template-text-left/template-text-left.component';
import { TemplateTableComponent } from './components/templates/template-table/template-table.component';
import { TemplateImageTextColumnsComponent } from './components/templates/template-image-text-columns/template-image-text-columns.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { HomeIconComponent } from './components/global/home-icon/home-icon.component';
import { UserIdleModule } from 'angular-user-idle';
import { LegalComponent } from './components/legal/legal.component';
import { ImmunoOncologyBintrafuspComponent } from './components/SectionComponents/immuno-oncology/binstrafusp/bintrafusp.component';
import { M9241Component } from './components/SectionComponents/immuno-oncology/m9241/m9241.component';
import { AbituzumabComponent } from './components/SectionComponents/immuno-oncology/abituzumab/abituzumab.component';
import { M3814Component } from './components/SectionComponents/DNA-DAMAGE-RESPONSE/m3814/m3814.component';
import { TepotinibComponent } from './components/SectionComponents/ONCOGENIC-PATHWAYS/tepotinib/tepotinib.component';
import { M2698Component } from './components/SectionComponents/ONCOGENIC-PATHWAYS/m2698/m2698.component';
import { M8891Component } from './components/SectionComponents/ONCOGENIC-PATHWAYS/m8891/m8891.component';
import { M7583Component } from './components/SectionComponents/ONCOGENIC-PATHWAYS/m7583/m7583.component';
import { NavigationFooter } from './components/global/navigation-footer/navigation-footer.component';
import { VideoControlComponent } from './components/shared/video-control/video-control.component';
import { TitleHeaderHomeComponent } from './components/shared/title-header-home/title-header-home.component';
import { PipelineCompoundsComponent } from './components/shared/pipeline-compounds/pipeline-compounds.component';

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 'auto',
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    NavScreenComponent,
    SliderComponent,
    TemplateTextLeftComponent,
    TemplateTableComponent,
    TemplateImageTextColumnsComponent,
    WelcomeComponent,
    HomeIconComponent,
    LegalComponent,
    ImmunoOncologyBintrafuspComponent,
    M9241Component,
    AbituzumabComponent,
    M3814Component,
    TepotinibComponent,
    M2698Component,
    M8891Component,
    M7583Component,
    NavigationFooter,
    VideoControlComponent,
    TitleHeaderHomeComponent,
    PipelineCompoundsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SwiperModule,
    ModalModule.forRoot(),
    UserIdleModule.forRoot({ idle: 0, timeout: 120, ping: 0 }),
  ],
  providers: [TrialService],
  bootstrap: [AppComponent],
})
export class AppModule {}
