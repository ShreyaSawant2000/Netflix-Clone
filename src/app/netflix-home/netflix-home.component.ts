import { Component, HostListener,ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-netflix-home',
  templateUrl: './netflix-home.component.html',
  styleUrls: ['./netflix-home.component.css']
})
export class NetflixHomeComponent {
 

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