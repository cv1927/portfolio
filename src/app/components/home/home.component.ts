import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { TimelineLite,Bounce } from 'gsap'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @ViewChild('title') title: ElementRef;
  @ViewChild('subtitle') subtitle: ElementRef;
  
  timeLine:TimelineLite;

  constructor() {
    this.timeLine = new TimelineLite();
  }

  ngOnInit() {
    this.timeLine.to(this.title.nativeElement, 2, {opacity:0, y:10, ease: Bounce.easeOut});
    this.timeLine.to(this.title.nativeElement, 1.5, {opacity:1, y:0, ease: Bounce.easeOut});
    this.timeLine.to(this.subtitle.nativeElement, 1.5, {opacity:0, y:50, ease: Bounce.easeInOut})
    this.timeLine.to(this.subtitle.nativeElement, 1.5, {opacity:1, y:0, ease: Bounce.easeOut})
  }

}
