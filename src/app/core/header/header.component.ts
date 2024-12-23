import { Component, HostListener, inject, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { SigninComponent } from '../../auth/components/signin/signin.component';
import { NavigationComponent } from '../navigation/navigation.component';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { ConfirmationDialogComponent } from '../../shared/dialogs/confirmation-dialog/confirmation-dialog.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [MatButtonModule, MatDialogModule, NavigationComponent, MatIconModule, MatCardModule, MatMenuModule, MatDividerModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit {
  isScrolled: boolean = false;
  isAuthenticated!: string;
  username:string = 'Username';
  email:string = 'username@gmail.com';

  readonly dialog = inject(MatDialog);
  readonly router = inject(Router);

  ngOnInit(): void {
    this.isAuthenticated = String(sessionStorage.getItem('isAuthenticated'));
    console.log(this.isAuthenticated)
  }

  constructor() {
  }

  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.isScrolled = window.scrollY > 0;
  }

  signInOnClick() {
    this.dialog.open(SigninComponent).afterClosed().subscribe(data => {
      
    })
  }

  logout(){
    this.dialog.open(ConfirmationDialogComponent, {data: { message: 'Are you sure you want to logout?'}}).afterClosed().subscribe(data => {
      if (data) {
        this.router.navigate(['landing-page'])
      }
    });
  }
}
