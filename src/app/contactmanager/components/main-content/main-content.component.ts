import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit {
  
  user:User;
  constructor(private activatedRoute:ActivatedRoute,private userService:UserService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params=>{
      let id = params['id'];
      if(!id) id = 1;
      this.user = null;
      this.userService.getUsers().subscribe(users=>{
        if(users.length == 0)
          return;
        setTimeout(()=>{
        this.user = this.userService.getUserById(id);
        },500)
      });
    });
  }

}
