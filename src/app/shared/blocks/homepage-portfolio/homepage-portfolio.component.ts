import { Component } from '@angular/core';
// import Swiper core and required modules
import Swiper, { Autoplay } from 'swiper';

Swiper.use([Autoplay]);

@Component({
  selector: 'app-homepage-portfolio',
  templateUrl: './homepage-portfolio.component.html',
  styleUrls: ['./homepage-portfolio.component.css']
})

export class HomepagePortfolioComponent {

  constructor() {}

}
