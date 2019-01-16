import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { User } from 'src/app/models/user';
import { FormControl, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-new-contact-dialog',
  templateUrl: './new-contact-dialog.component.html',
  styleUrls: ['./new-contact-dialog.component.scss']
})
export class NewContactDialogComponent implements OnInit {

  avatars:string[] = ['svg-1','svg-2','svg-3','svg-4'];
  user:User;
  name:FormControl;
  constructor(private dialogRef:MatDialogRef<NewContactDialogComponent>,private userService:UserService) {
    this.name = new FormControl(Validators.required);
   }

  ngOnInit() {
    this.user = new User();
  }

  getErrorMessage(){
    return (this.name.hasError('required')? 'You must Enter a Name':'');
  }

  save(){
    this.userService.addUser(this.user).then(user => {
      this.dialogRef.close(user);
    });
  }
  cancel(){
    this.dialogRef.close(null);
  }
}
