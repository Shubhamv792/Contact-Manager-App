import { Component, OnInit, Input, ViewChild, AfterViewInit } from '@angular/core';
import { Note } from 'src/app/models/note';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit,AfterViewInit {

  @Input() notes:Note[];
  @ViewChild(MatPaginator) matPaginator:MatPaginator;
  @ViewChild(MatSort) sort:MatSort

  displayedColumns: string[] = ['position', 'title', 'date'];
  dataSource:MatTableDataSource<Note>;

  constructor() { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource<Note>(this.notes);
    // Follow this template to override sortingDataAccessor
    // this.dataSource.sortingDataAccessor = (item, property) => {
    //   switch(property) {
    //     case 'project.name': return item.project.name;
    //     default: return item[property];
    //   }
    this.dataSource.sortingDataAccessor = (note,property)=>{
      switch(property){
        case 'position': return note.id;
        default: return note[property];
      }
    } 
  }
  
  ngAfterViewInit(){
    this.dataSource.paginator = this.matPaginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
