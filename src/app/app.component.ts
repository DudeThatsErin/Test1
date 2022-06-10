import { Component } from '@angular/core';
import Swiper, { Autoplay } from 'swiper';

Swiper.use([Autoplay]);
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Erin Skidds';
}
