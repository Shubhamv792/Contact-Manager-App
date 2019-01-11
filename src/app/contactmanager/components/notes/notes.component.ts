import { Component, OnInit, Input } from '@angular/core';
import { Note } from 'src/app/models/note';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  @Input() notes:Note[];
  
  constructor() { }

  ngOnInit() {
  }

}
