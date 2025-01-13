import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';
import { foods } from '../api/foods';
import { Router, RouterLink } from '@angular/router';
import { Foods } from '../../model/food';
import { filters } from '../api/filters';

@Component({
    selector: 'app-catalog',
    standalone: false,
    templateUrl: './catalog.component.html',
    styleUrl: './catalog.component.css'
})
export class CatalogComponent implements OnInit {

  isFilterModalOpen: boolean = false;

  filteredCards: Foods[] = []; // Initialize as empty, then populate in `ngOnInit`

  foods:Foods[]=foods;

  filtersList: any[]=filters;

  
  isMenuOpen: boolean = false;

  constructor(
    private router: Router, 
    private eRef: ElementRef,
    private renderer: Renderer2
  ) {}
  ngOnInit(): void {
    this.filteredCards = [...this.foods]; // Start by displaying all cards
  }

  toggleFilterModal() {
    this.isFilterModalOpen = !this.isFilterModalOpen;
    if (this.isFilterModalOpen) {
      this.isMenuOpen = false;
    }
  }

  // Apply a filter
  applyFilter(filter: any) {
    // Reset other filters and activate the selected one
    this.filtersList.forEach((f: any) => (f.active = false));
    filter.active = true;

    if(filter.name === 'All') {
      this.filteredCards = [...this.foods]
    }
    else
    {
      this.filteredCards = this.foods.filter((food) => food.groupTitle === filter.name);
    }
  }

  // Reset all filters
  resetFilters() {
    this.filtersList.forEach((f: any) => (f.active = false));
    this.selectedCategory = null;
    this.filteredCards = [...this.foods];
  }

  // currently selected category filter
  selectedCategory: string | null = null;

  // method to check if a product is visible based on the filter
  isVisible(filter: any): boolean {
    return !this.selectedCategory || this.selectedCategory === filter.name ;
  }

  sup() {
    return this.foods.find(food => food.itemId === 31);  
  }

  // Close modal and handle filter selection
  onFilterSelect(filterName: string) {
    console.log('Selected Filter:', filterName);
    this.isFilterModalOpen = false; // Close modal
  }

  // Close modal when clicking outside
  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event) {
    const clickedInside = this.eRef.nativeElement.contains(event.target);
    if (!clickedInside) {
      this.isFilterModalOpen = false; // Close modal if clicked outside
    }
  }
}
