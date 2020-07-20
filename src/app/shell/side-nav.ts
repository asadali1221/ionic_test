import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { MenuController, Platform } from '@ionic/angular';


@Component({
    selector: 'side-nav',
    templateUrl: './side-nav.html',
    styleUrls: ['./side-nav.scss']
})
export class SideNav {

    constructor(private menu: MenuController,private platform: Platform,) {}
    ngOnInit() {
      console.log(this.menu);
     }

    menus = [
        {
          title: 'Home',
          link: '/home-land',
          icon: 'home_24px',
          src_active: 'assets/images/home_24px.svg',
          src: 'assets/Asset export/home_24px.svg'
        },
    
        {
          title: 'Scheduled & LIVE',
          link: '/scheduled-live',
          icon: 'date_range_24px',
          src_active: 'assets/Asset export/date_range_24px.svg',
          src: 'assets/Asset export/date_range_24px_outlined.svg'
        },
        {
          title: 'Statistics',
          link: '/statistics',
          icon: 'trending_up_24px',
          src_active: 'assets/Asset export/trending_up_24px.svg',
          src: 'assets/Asset export/trending_up_24px_outlined.svg'
        }
        // { title: 'Log out', link: '/locale', icon: 'icon_shut_down' }
      ];

      get isWeb(): boolean {
        return !this.platform.is('cordova');
      }
    openFirst() {
        this.menu.enable(true, 'first');
        this.menu.open('first');
    }

    openEnd() {
        this.menu.open('end');
    }

    openCustom() {
        this.menu.enable(true, 'custom');
        this.menu.open('custom');
    }
}