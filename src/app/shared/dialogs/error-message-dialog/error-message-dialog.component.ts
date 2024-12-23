import { Component, Inject, Input } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { 
  MatDialogModule,
  MatDialogActions,
  MatDialogClose,
  MatDialogTitle,
  MatDialogContent,
} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-error-message-dialog',
  standalone: true,
  imports: [
    MatDividerModule,
    MatDialogModule,
    MatDialogActions,
    MatDialogClose,
    MatDialogTitle,
    MatDialogContent,
    MatButtonModule,
    MatCardModule,
    MatIconModule],
  templateUrl: './error-message-dialog.component.html',
  styleUrl: './error-message-dialog.component.css'
})
export class ErrorMessageDialogComponent {

  @Input() message: string;

  constructor(public dialogRef: MatDialogRef<ErrorMessageDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any){
    this.message = data.message;
  }

  close(){
    this.dialogRef.close(false);
  }
}
