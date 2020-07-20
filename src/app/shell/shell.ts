import {Component} from '@angular/core';
import {Router, NavigationEnd, NavigationStart} from "@angular/router";
import { AuthenticationGuard } from 'src/app/core';

declare let window:any;
@Component({
    selector: 'shell',
    templateUrl: './shell.html',
})
export class Shell {
    public loading:any = false;
    constructor(protected router:Router){}

    ngOnInit(){
        this.router.events.subscribe((event) => {
            if (event instanceof NavigationStart) {
                console.log(event);
                this.loading = true;
            }
            else if (event instanceof NavigationEnd) {
                this.loading = false;
            }
        });        
    }
    
}