import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'botakist\'s angular page';
  animationOpacity = 1;
  animationRendered: boolean;
  displayWidthCompatibilityMessage = false;
  constructor() { }
  @HostListener('window:resize')
  checkWidth() {
    if (window.innerWidth > 299) {
      this.displayWidthCompatibilityMessage = true;
    } else {
      this.displayWidthCompatibilityMessage = false;
    }
  }
  ngOnInit(): void {
    // Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    // Add 'implements OnInit' to the class.
    this.animationRendered = true;
    const fadeEffect = setInterval(() => {
      if (this.animationOpacity > 0) {
        this.animationOpacity -= 0.1;
      } else {
        clearInterval(fadeEffect);
        this.animationRendered = false;
      }
    }, 150);
  }
}
