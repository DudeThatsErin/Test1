import { SwiperModule } from 'swiper/angular';
import { HomepagePortfolioComponent } from './blocks/homepage-portfolio/homepage-portfolio.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeftSidebarComponent } from './blocks/left-sidebar/left-sidebar.component';

@NgModule({
  declarations: [
    LeftSidebarComponent,
    HomepagePortfolioComponent
  ],
  imports: [
    CommonModule,
    SwiperModule
  ],
  exports: [
    LeftSidebarComponent,
    HomepagePortfolioComponent
  ]
})
export class SharedModule { }
