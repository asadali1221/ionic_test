import {Component} from '@angular/core';
import { Router } from "@angular/router";

@Component({
    selector   : 'footer-nave',
    templateUrl: './footer-nave.html',
})
export class FooterNave {

    public footer:any=false;

    constructor(
        public router: Router,
    ){
       
    }
    ngOnInit(){
        
    }
    ngAfterViewInit(){
    }

}
