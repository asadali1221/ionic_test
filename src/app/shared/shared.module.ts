import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@NgModule({
    declarations: [

    ],
    imports: [
        FormsModule, CommonModule, RouterModule,IonicModule

    ],
    exports: [
        RouterModule,
        FormsModule, CommonModule,IonicModule
    ],
    providers: [

    ]

})
export class SharedModule {


}