import { AfterViewInit, Component, OnInit } from '@angular/core';
import { allFeatured } from '../../mock-data';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-featured',
  imports: [SlickCarouselModule, MatCardModule, MatIconModule],
  templateUrl: './featured.component.html',
  styleUrl: './featured.component.css'
})
export class FeaturedComponent implements AfterViewInit, OnInit{

  items:any[] = allFeatured;

  visibleItems: any[] = [];
  startIndex: number = 0;
  itemsToShow: number = 5;

  ngOnInit(): void {
      
  }

  ngAfterViewInit(): void {
      
  }

  constructor() {
    this.updateVisibleItems();
  }

  updateVisibleItems(): void {
    this.visibleItems = this.items.slice(this.startIndex, this.startIndex + this.itemsToShow);
  }

  nextPage(): void {
    if (this.startIndex + this.itemsToShow < this.items.length) {
      this.startIndex++;
      this.updateVisibleItems();
    }
  }

  prevPage(): void {
    if (this.startIndex > 0) {
      this.startIndex--;
      this.updateVisibleItems();
    }
  }
}
