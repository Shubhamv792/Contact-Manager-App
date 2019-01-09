import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactmanagerAppComponent } from './contactmanager-app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { Routes,RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCheckboxModule, MatButtonModule, MatIconModule, MatToolbarModule, MatListModule, MatCardModule, MatSidenavModule, MatProgressSpinnerModule } from '@angular/material';
import {LayoutModule} from '@angular/cdk/layout';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from '../services/user.service';


const routes:Routes = [
  {path:'',component:ContactmanagerAppComponent
  ,children:[
    {path:':id',component:MainContentComponent},
    {path:'',component:MainContentComponent}
  ]},
  {path:'**',redirectTo:''}
];
@NgModule({
  declarations: [ContactmanagerAppComponent, ToolbarComponent, MainContentComponent, SidenavComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    LayoutModule,
    MatCheckboxModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    MatListModule,
    MatCardModule,
    MatSidenavModule,
    FlexLayoutModule,
    RouterModule.forChild(routes)
  ],
  providers:[UserService]
})
export class ContactmanagerModule { }
