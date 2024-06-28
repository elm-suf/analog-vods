import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: "analog-vods-root",
  standalone: true,
  imports: [RouterOutlet],
  template: ` <router-outlet></router-outlet> `,
  host: {
    class: "flex min-h-screen text-zinc-50 bg-slate-900",
  },
})
export class AppComponent {}
