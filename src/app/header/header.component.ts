import { Component, ElementRef, HostListener } from '@angular/core';
import { infos } from '../api/infos';
import { MatIconModule } from '@angular/material/icon';

@Component({
    selector: 'app-header',
    standalone: false,
    templateUrl: './header.component.html',
    styleUrl: './header.component.css'
})
export class HeaderComponent {
  infos:any=infos;
  isFilterModalOpen: boolean = false;

  /**
   *
   */
  constructor(private eRef: ElementRef,) {}

  // Close modal when clicking outside
    @HostListener('document:click', ['$event'])
    onClickOutside(event: Event) {
      const clickedInside = this.eRef.nativeElement.contains(event.target);
      if (!clickedInside) {
        this.isFilterModalOpen = false; // Close modal if clicked outside
      }
    }
    
}
