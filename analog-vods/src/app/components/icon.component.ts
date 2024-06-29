import { Component } from '@angular/core';
import { provideIcons } from '@ng-icons/core';
import { lucideChevronRight } from '@ng-icons/lucide';
import { HlmIconComponent } from '@spartan-ng/ui-icon-helm';

@Component({
  selector: 'app-vods-icon',
  standalone: true,
  imports: [HlmIconComponent],
  providers: [provideIcons({ lucideChevronRight })],
  template: ` <hlm-icon size="xl" name="lucideChevronRight" /> `,
  host: {
    class: 'flex',
  },
})
export class IconComponent {}
