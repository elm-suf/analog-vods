import { Component } from "@angular/core";

@Component({
  selector: "analog-vods-home",
  standalone: true,
  imports: [],
  template: ` <h2 class="font-semibold">ANALOG-VODS</h2> `,
  host: {
    class: "w-full grid place-items-center content-center border px-8",
  },
})
export default class HomeComponent {}
