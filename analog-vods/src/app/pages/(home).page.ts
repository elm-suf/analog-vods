import { Component } from '@angular/core';
import { hlmH1 } from '@spartan-ng/ui-typography-helm';
import { IconComponent } from '../components/icon.component';
import { CommandComponent } from '../components/command.component';
import { CommandDialogComponent } from '../components/command-dialog.component';

@Component({
  selector: 'app-vods-home',
  standalone: true,
  imports: [IconComponent, CommandComponent, CommandDialogComponent],
  template: `
    <div class="flex gap-1 items-end">
      <app-vods-icon class="" />
      <h2 class="${hlmH1}">ANALOG-VODS</h2>
    </div>
    <app-vods-command-dialog />
  `,
  host: {
    class: 'min-h-screen grid place-items-center content-center border px-8',
  },
})
export default class HomeComponent {}
