import {Component, Signal} from '@angular/core';
import {toSignal} from "@angular/core/rxjs-interop";
import {injectLoad} from "@analogjs/router";
import {load} from './home.server'
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  template: `
     <p>home page works!! {{data().loaded}}</p>
  `,
})
export default class HomePage {
  data: Signal<{loaded: boolean}> = toSignal(injectLoad<typeof load>(), { requireSync: true });
}
