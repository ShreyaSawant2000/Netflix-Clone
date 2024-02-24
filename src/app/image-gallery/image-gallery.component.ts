import { Component, HostListener, ElementRef, ViewChild } from '@angular/core';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { Router } from '@angular/router';

@Component({
  selector: 'app-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.css'],
})
export class ImageGalleryComponent {
  test: any = new Array(100000).fill('/assets/images/large-movie7.jpg');
  

  constructor(private router:Router) {}
 
  @ViewChild('nav') navRef!: ElementRef;
  ngAfterViewInit() {
    // Access the nativeElement after the view has been initialized
    this.nav = this.navRef.nativeElement;
  }

  nav!: HTMLElement; // Use ! to tell TypeScript that it will be initialized

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    if (window.scrollY >= 100) {
      this.nav.classList.add('nav-black');
    } else {
      this.nav.classList.remove('nav-black');
    }
  }
  


  
}
