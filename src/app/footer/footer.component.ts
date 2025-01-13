import { Component, OnInit } from '@angular/core';
import { infos } from '../api/infos';
import { Infos } from '../../model/infos';

@Component({
    selector: 'app-footer',
    standalone: false,
    templateUrl: './footer.component.html',
    styleUrl: './footer.component.css'
})
export class FooterComponent {
  
  infos:Infos=infos;

  // ngOnInit(): void {
  //   throw new Error('Method not implemented.');
  // }

  currentYear: number = new Date().getFullYear();
  
}
