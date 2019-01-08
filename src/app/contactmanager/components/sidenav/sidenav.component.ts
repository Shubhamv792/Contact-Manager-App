import { Component, OnInit,NgZone,HostListener } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { BreakpointObserver } from '@angular/cdk/layout';

const SMALL_WIDTH_BREAKPOINT = 720;

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {  

  private isSmall:boolean = false;
  private breakPointObserver:BreakpointObserver;
  // private mediaList:MediaQueryList;
  // constructor(private mediaMatcher:MediaMatcher) {
  //   // MediaMatcher does not wrap ngZone 
  //   // we need to refresh screen everytime change happens 
  //   // Need to run change detection scan ; can be done in 3 ways
  //   this.mediaList = this.mediaMatcher.matchMedia(`(max-width:${SMALL_WIDTH_BREAKPOINT})`)
  //   this.mediaList.addListener(mql =>{
  //     console.log(mql);
  //     this.isSmall = mql.matches;
  //   });  
  // }
  constructor(pointObserver:BreakpointObserver){
    // const layoutChanges = breakPointObserver.observe([`max-width:720px`]);
    // layoutChanges.subscribe(result=>{
    //   console.log("Test");
    //   this.isSmall = result.matches;
    // });
    this.breakPointObserver = pointObserver;
  }

  ngOnInit() {
  }

  isScreenSmall():boolean{
    this.isSmall = this.breakPointObserver.isMatched('(max-width: 599px)');
    console.log(this.isSmall);
    return this.isSmall;

  }
}
