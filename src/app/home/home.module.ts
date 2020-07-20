import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomescreenComponent } from './homescreen/homescreen.component';
import { SharedModule } from '../shared/shared.module';
import { HomedetailComponent } from './homedetail/homedetail.component';


@NgModule({
  declarations: [HomescreenComponent,HomedetailComponent],
  imports: [
    CommonModule,
    SharedModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
