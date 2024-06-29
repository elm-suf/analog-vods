import { Component } from '@angular/core';
import { hlmH1 } from '@spartan-ng/typography-helm';

@Component({
  selector: 'analog-vods-home',
  standalone: true,
  template: ` <h2 class="${hlmH1} ">ANALOG-VODS</h2> `,
  host: {
    class: 'w-full grid place-items-center content-center border px-8',
  },
})
export default class HomeComponent {}
