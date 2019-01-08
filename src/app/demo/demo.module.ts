import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoAppComponent } from './demo-app.component';
import { MatCheckboxModule,MatButtonModule,MatIconModule } from '@angular/material';
import { Routes,RouterModule } from '@angular/router';
import { FlexDemoComponentComponent } from './flex-demo-component/flex-demo-component.component';

const routes:Routes = [
  {path:'',component:DemoAppComponent},
  {path:'flexdemo',component:FlexDemoComponentComponent}
]
@NgModule({
  declarations: [DemoAppComponent, FlexDemoComponentComponent],
  imports: [
    CommonModule,
    MatCheckboxModule,
    MatButtonModule,
    MatIconModule,
    RouterModule.forChild(routes)
  ]
})
export class DemoModule { }
