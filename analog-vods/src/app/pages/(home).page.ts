import { Component } from '@angular/core';
import { hlmH1 } from '@spartan-ng/ui-typography-helm';
import { IconComponent } from '../components/icon.component';

@Component({
  selector: 'analog-vods-home',
  standalone: true,
  imports: [IconComponent],
  template: `
    <div class="flex gap-1 items-end">
      <app-icon />
      <h2 class="${hlmH1}">ANALOG-VODS</h2>
    </div>
  `,
  host: {
    class: 'w-full grid place-items-center content-center border px-8',
  },
})
export default class HomeComponent {}
