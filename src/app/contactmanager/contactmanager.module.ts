import { NgModule } from '@angular/core';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { ContactmanagerAppComponent } from './contactmanager-app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { Routes,RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCheckboxModule, MatButtonModule, MatIconModule, MatToolbarModule, MatListModule, MatCardModule, MatSidenavModule } from '@angular/material';
import {LayoutModule} from '@angular/cdk/layout';

const routes:Routes = [
  {path:'',component:ContactmanagerAppComponent
  ,children:[
    {path:'',component:MainContentComponent}
  ]},
  {path:'**',redirectTo:''}
];
@NgModule({
  declarations: [ContactmanagerAppComponent, ToolbarComponent, MainContentComponent, SidenavComponent],
  imports: [
    CommonModule,
    LayoutModule,
    MatCheckboxModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatListModule,
    MatCardModule,
    MatSidenavModule,
    FlexLayoutModule,
    RouterModule.forChild(routes)
  ],
  providers:[]
})
export class ContactmanagerModule { }
