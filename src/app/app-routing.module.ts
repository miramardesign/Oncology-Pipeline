import { SliderComponent } from './components/slider/slider.component';
import { NavScreenComponent } from './components/nav-screen/nav-screen.component';
import { HomeComponent } from './components/home/home.component';
import { LegalComponent } from './components/legal/legal.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { ImmunoOncologyBintrafuspComponent } from './components/SectionComponents/immuno-oncology/binstrafusp/bintrafusp.component';
import { AbituzumabComponent } from './components/SectionComponents/immuno-oncology/abituzumab/abituzumab.component';
import { M9241Component } from './components/SectionComponents/immuno-oncology/m9241/m9241.component';
import { M7583Component } from './components/SectionComponents/ONCOGENIC-PATHWAYS/m7583/m7583.component';
import { M8891Component } from './components/SectionComponents/ONCOGENIC-PATHWAYS/m8891/m8891.component';
import { M2698Component } from './components/SectionComponents/ONCOGENIC-PATHWAYS/m2698/m2698.component';
import { TepotinibComponent } from './components/SectionComponents/ONCOGENIC-PATHWAYS/tepotinib/tepotinib.component';
import { M3814Component } from './components/SectionComponents/DNA-DAMAGE-RESPONSE/m3814/m3814.component';

const routes: Routes = [
  // {
  //   path: 'home',
  //   component: HomeComponent,
  //   pathMatch: 'full'
  // },
  {
    path: 'bintrafusp',
    component: ImmunoOncologyBintrafuspComponent,
    pathMatch: 'full'
  },
  {
    path: 'M9241',
    component: M9241Component,
    pathMatch: 'full'
  },
  {
    path: 'Avelumab',
    component: AbituzumabComponent,
    pathMatch: 'full'
  },
  {
    path: 'Abituzumab',
    component: AbituzumabComponent,
    pathMatch: 'full'
  },
  {
    path: 'M3814',
    component: M3814Component,
    pathMatch: 'full'
  },
  {
    path: 'Tepotinib',
    component: TepotinibComponent,
    pathMatch: 'full'
  },
  {
    path: 'M2698',
    component: M2698Component,
    pathMatch: 'full'
  },
  {
    path: 'M8891',
    component: M8891Component,
    pathMatch: 'full'
  },
  {
    path: 'M7583',
    component: M7583Component,
    pathMatch: 'full'
  },
  {
    path: 'legal',
    component: LegalComponent,
    pathMatch: 'full'
  },
  {
    path: 'nav',
    component: NavScreenComponent,
    pathMatch: 'full'
  },
  {
    path: 'slides/:group',
    component: SliderComponent,
    pathMatch: 'full',
  },
  {
    path: '',
    component: WelcomeComponent,
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
