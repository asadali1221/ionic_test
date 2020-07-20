import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { MenuController } from '@ionic/angular';
import {AuthenticationService} from '../core/authentication/authentication.service';
@Component({
    selector: 'top-nav',
    templateUrl: './topnav.html',
})
export class TopNav {

    constructor(private menu: MenuController,private router: Router, private authenticationService:AuthenticationService) { }
    ngOnInit() {}

    public logout() {
        this.authenticationService.logout().subscribe(() => this.router.navigate(['/login'], { replaceUrl: true }));
      }
}