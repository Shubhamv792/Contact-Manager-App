import { Component, OnInit } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
import { MatDialog, MatSnackBar, MatSnackBarRef, SimpleSnackBar } from '@angular/material';
import { NewContactDialogComponent } from '../new-contact-dialog/new-contact-dialog.component';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';


@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
@Output() toggleSidenav = new EventEmitter<void>();
@Output() toggleTheme = new EventEmitter<void>();
@Output() toggleDir = new EventEmitter<void>();

  constructor(private dialog:MatDialog,private snackBar:MatSnackBar,private router:Router) { }

  ngOnInit() {
  }
  openAddContactDialog():void{
    let dialogRef = this.dialog.open(NewContactDialogComponent,{
      width:'450px'
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.openSnackBar("Contact Added","navigate")
          .onAction().subscribe(() =>{
            // navigate to the conatct just Added
            this.router.navigate(['/contactmanager',result._id]);
          });
      }
    });
  }

  openSnackBar(message:string,action:string):MatSnackBarRef<SimpleSnackBar>{
    return this.snackBar.open(message,action,{
      duration:5000,
    });
  }
  
}
