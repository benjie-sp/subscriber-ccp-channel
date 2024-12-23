import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { allFeatured } from '../../mock-data';
declare var $: any;

@Component({
  selector: 'app-banner',
  imports: [MatButtonModule, MatIconModule],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css'
})
export class BannerComponent implements OnInit, AfterViewInit{
  @ViewChild('video') videoElement!: ElementRef<HTMLVideoElement>;
  mediaData: any[] = allFeatured;
  currentMediaIndex: number = 0;
  showPhoto: boolean = true;
  teaserDuration!: number;

  ngAfterViewInit(): void {
    this.autoPlayMedia();
  }

  ngOnInit(): void {
  }

  autoPlayMedia() {
    this.getVideoDuration();
    setInterval(() => {
      const currentMedia = this.mediaData[this.currentMediaIndex];

      if (this.showPhoto) {
        this.showPhoto = false;
      } else {
        this.showPhoto = true;
        this.currentMediaIndex = (this.currentMediaIndex + 1) % this.mediaData.length;
      }
    }, this.showPhoto ? 5000 : this.teaserDuration);
  }

  getVideoDuration(): number {
    const videoElement = document.createElement('video');
    videoElement.src = this.mediaData[this.currentMediaIndex].teaser;

    // Listen for the loadedmetadata event to ensure duration is available
    if (this.mediaData[this.currentMediaIndex].teaser) {
      videoElement.addEventListener('loadedmetadata', () => {
        this.teaserDuration = videoElement.duration * 1000; // Duration in milliseconds
      }); 
    } else {
      this.teaserDuration = 0;
    }

    return this.teaserDuration;
  }
}

