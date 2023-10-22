
 import { Component } from '@angular/core';
 import {RouterLink, RouterOutlet} from "@angular/router";



@Component({
  selector: 'app-default-layout',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink
  ],
  template: `
     <nav class="flex flex-row px-1 text-white py-3 bg-orange-500"><div class="mx-2 cursor-pointer" routerLink="home">Home</div><div class="mx-2 cursor-pointer" routerLink="search">Search</div></nav>
     <router-outlet></router-outlet>
  `,
})
export default class DefaultLayoutPage {
}
