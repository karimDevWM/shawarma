import { Component } from '@angular/core';
import { homeCarouselPhotos } from '../api/homeCarouselPhotos';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-home',
    standalone: false,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css'
})
export class HomeComponent {
  carouselPhotos:any = homeCarouselPhotos;
}
