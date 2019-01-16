import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactmanagerAppComponent } from './contactmanager-app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { Routes,RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCheckboxModule, MatButtonModule, MatIconModule, MatToolbarModule, MatListModule, MatCardModule, MatSidenavModule, MatProgressSpinnerModule, MatTabsModule, MatTableModule, MatPaginatorModule, MatInputModule, MatSortModule, MatMenuModule, MatDialogModule, MatFormFieldModule, MatOptionModule, MatSelectModule, MatDatepickerModule, MatNativeDateModule, MatSnackBarModule } from '@angular/material';
import {LayoutModule} from '@angular/cdk/layout';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from '../services/user.service';
import { NotesComponent } from './components/notes/notes.component';
import { NewContactDialogComponent } from './components/new-contact-dialog/new-contact-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


const routes:Routes = [
  {path:'',component:ContactmanagerAppComponent
  ,children:[
    {path:':id',component:MainContentComponent},
    {path:'',component:MainContentComponent}
  ]},
  {path:'**',redirectTo:''}
];
@NgModule({
  declarations: [ContactmanagerAppComponent, ToolbarComponent, MainContentComponent, SidenavComponent, NotesComponent, NewContactDialogComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    MatPaginatorModule,
    MatOptionModule,
    MatSnackBarModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatMenuModule,
    MatFormFieldModule,
    MatSortModule,
    MatTabsModule,
    LayoutModule,
    MatInputModule,
    MatCheckboxModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    MatListModule,
    MatCardModule,
    MatSidenavModule,
    FlexLayoutModule,
    RouterModule.forChild(routes)
  ],
  providers:[UserService],
  entryComponents:[NewContactDialogComponent]
})
export class ContactmanagerModule { }
