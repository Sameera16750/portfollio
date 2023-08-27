// core
import { Component } from '@angular/core';
// common
import { CommonModule } from '@angular/common';
import {NavigationEnd, Router, RouterLink} from "@angular/router";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isNaviOpenInMobile=false;
  activeUrl='Home';

  constructor(private rout:Router) {
    rout.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // This event is triggered when the route changes
        this.activeUrl= event.url.split('/')[1]
      }
    });
  }
  navigat(url:string){
    this.rout.navigate([url]);
    this.isNaviOpenInMobile=!this.isNaviOpenInMobile;
  }
}
