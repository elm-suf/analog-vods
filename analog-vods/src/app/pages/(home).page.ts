import { Component } from '@angular/core';

import { AnalogWelcomeComponent } from './analog-welcome.component';

@Component({
  selector: 'analog-vods-home',
  standalone: true,
  imports: [AnalogWelcomeComponent],
  template: `
     <analog-vods-analog-welcome/>
  `,
})
export default class HomeComponent {
}
