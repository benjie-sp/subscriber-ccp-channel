import { AfterViewInit, Component, OnInit } from '@angular/core';
import { allFeatured } from '../../mock-data';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-recommended',
  imports: [SlickCarouselModule, MatCardModule],
  templateUrl: './recommended.component.html',
  styleUrl: './recommended.component.css',
})
export class RecommendedComponent implements AfterViewInit, OnInit {
  items: any[] = allFeatured;

  visibleItems: any[] = [];
  startIndex: number = 0;
  itemsToShow: number = 5;

  ngOnInit(): void {}

  ngAfterViewInit(): void {}

  constructor() {
    this.updateVisibleItems();
  }

  updateVisibleItems(): void {
    this.visibleItems = this.items.slice(
      this.startIndex,
      this.startIndex + this.itemsToShow
    );
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
