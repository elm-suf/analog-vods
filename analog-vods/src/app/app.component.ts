import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-vods-root',
  standalone: true,
  imports: [RouterOutlet],
  template: ` <router-outlet /> `,
  host: {
    class: 'text-foreground block antialiased',
  },
})
export class AppComponent {}
