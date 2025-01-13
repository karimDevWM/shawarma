import { Component } from '@angular/core';
import { Infos } from '../model/infos';
import { infos } from './api/infos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'le_roi_shawarma_ui';
infos: Infos=infos;
}
