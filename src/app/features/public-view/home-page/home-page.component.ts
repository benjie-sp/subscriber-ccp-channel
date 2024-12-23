import { Component, OnInit } from '@angular/core';
import { featuredImages } from '../mock-data';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-home-page',
  imports: [MatButtonModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent implements OnInit{

  ngOnInit(): void {
      sessionStorage.clear();
  }

  images = featuredImages;
}
