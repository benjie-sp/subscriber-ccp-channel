import { Component, inject, OnInit } from '@angular/core';
import { navItems } from './navItems';
import { ActivatedRoute, NavigationEnd, Router, RouterModule } from '@angular/router';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { filter } from 'rxjs';

@Component({
  selector: 'app-navigation',
  imports: [RouterModule, NgIf, NgFor, NgClass],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css',
})
export class NavigationComponent implements OnInit{
  navItems = navItems;
  currentRoute!: string;

  readonly router = inject(Router);
  readonly activatedRoute = inject(ActivatedRoute);

  ngOnInit(): void {
    // Get the initial route and listen for route changes
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.currentRoute = event.urlAfterRedirects;
        console.log(event.urlAfterRedirects)
      });
  }

  constructor() {
  }
}
