import {NgModule} from "@angular/core";
import {TopNav} from './topnav';
import {FooterNave} from './footer-nave';
import {Shell} from './shell';
import { SharedModule } from '../shared/shared.module';
import { SideNav } from './side-nav';
import { MatExpansionModule } from '@angular/material/expansion';
import {MatListModule} from '@angular/material/list';
import { MatSidenavModule} from '@angular/material/sidenav'; 


@NgModule({
    imports: [SharedModule,MatExpansionModule,MatListModule,MatSidenavModule],
    declarations: [
        TopNav, FooterNave, Shell,SideNav
    ],
    exports: [TopNav, FooterNave, Shell],
    providers   : [],
})
export class ShellModule {
}

export {Shell};