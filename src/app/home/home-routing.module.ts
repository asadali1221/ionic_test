import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomescreenComponent } from './homescreen/homescreen.component';
import { HomedetailComponent } from './homedetail/homedetail.component';


const routes: Routes = [
  {path:'homescreen', component:HomescreenComponent},
  {path:'detail', component:HomedetailComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
