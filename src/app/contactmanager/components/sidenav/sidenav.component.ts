import { Component, OnInit,NgZone,HostListener, ViewChild } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { BreakpointObserver } from '@angular/cdk/layout';
import { UserService } from 'src/app/services/user.service';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user';
import { Router } from '@angular/router';
import { MatSidenav } from '@angular/material';

const SMALL_WIDTH_BREAKPOINT = 720;
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {  

  isDarkTheme:boolean = false;
  dir:string = "ltr";
  private isSmall:boolean = false;
  private users:Observable<User[]>;
  @ViewChild(MatSidenav) sidenav:MatSidenav;
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
constructor(private breakPointObserver:BreakpointObserver,private userService:UserService,private router:Router){
  // const layoutChanges = breakPointObserver.observe([`max-width:720px`]);
  // layoutChanges.subscribe(result=>{
  //   console.log("Test");
  //   this.isSmall = result.matches;
  // });
  
}
  
ngOnInit() {
  this.users = this.userService.getUsers();
  this.userService.loadAll();
  this.router.events.subscribe((event)=>{
    if(this.isScreenSmall()){
      this.sidenav.close();
    }
  });
  // Handle this in main content component 
  // this.users.subscribe(data=>{
    //   if(data.length > 0)
    //     this.router.navigate(['/contactmanager',data[0].id]);
    
    // });
  }
    
  toggleTheme(){
    this.isDarkTheme = !this.isDarkTheme;
  }
  toggleDir(){
    this.dir = (this.dir === 'ltr')? 'rtl':'ltr';
    this.sidenav.toggle().then(()=>this.sidenav.toggle()); 
  }
  isScreenSmall():boolean{
    this.isSmall = this.breakPointObserver.isMatched(`(max-width: ${SMALL_WIDTH_BREAKPOINT}px)`);
    return this.isSmall;
  }
}
