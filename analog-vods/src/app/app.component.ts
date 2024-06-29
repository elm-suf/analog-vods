import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: "analog-vods-root",
  standalone: true,
  imports: [RouterOutlet],
  template: ` <router-outlet /> `,
  host: {
    class: "dark flex min-h-screen bg-background text-foreground antialiased",
  },
})
export class AppComponent {}
