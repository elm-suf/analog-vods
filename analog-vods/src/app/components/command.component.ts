import { NgFor } from '@angular/common';
import { Component, HostListener, signal } from '@angular/core';
import { provideIcons } from '@ng-icons/core';
import {
  lucideCalendar,
  lucideCog,
  lucidePlus,
  lucideSearch,
  lucideSmile,
  lucideUser,
  lucideWallet,
} from '@ng-icons/lucide';
import {
  HlmAvatarComponent,
  HlmAvatarFallbackDirective,
  HlmAvatarImageDirective,
} from '@spartan-ng/ui-avatar-helm';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { BrnCommandImports } from '@spartan-ng/ui-command-brain';
import { HlmCommandImports } from '@spartan-ng/ui-command-helm';
import {
  BrnDialogCloseDirective,
  BrnDialogComponent,
  BrnDialogContentDirective,
  BrnDialogOverlayComponent,
  BrnDialogTriggerDirective,
} from '@spartan-ng/ui-dialog-brain';
import { HlmDialogOverlayDirective } from '@spartan-ng/ui-dialog-helm';
import { HlmIconComponent } from '@spartan-ng/ui-icon-helm';
import { mockResponse } from './mock.data';

@Component({
  selector: 'app-vods-command',
  standalone: true,
  imports: [
    BrnCommandImports,
    HlmCommandImports,
    HlmIconComponent,
    HlmButtonDirective,
    HlmAvatarImageDirective,
    HlmAvatarComponent,
    HlmAvatarFallbackDirective,
    NgFor,
    BrnDialogComponent,
    BrnDialogCloseDirective,
    BrnDialogTriggerDirective,
    BrnDialogContentDirective,
    BrnDialogOverlayComponent,
    HlmDialogOverlayDirective,
  ],
  providers: [
    provideIcons({
      lucideSearch,
      lucideCalendar,
      lucideSmile,
      lucidePlus,
      lucideUser,
      lucideWallet,
      lucideCog,
    }),
  ],
  template: `
    <div
      class="flex items-center justify-center py-20 mx-auto text-sm max-w-screen-sm space-x-4"
    >
      <p>
        Press
        <code hlmCode>⌘ + /</code>
      </p>
    </div>

    <brn-dialog
      closeDelay="100"
      [state]="state()"
      (stateChanged)="stateChanged($event)"
    >
      <brn-cmd class="w-96" hlm>
        <hlm-cmd-input-wrapper>
          <hlm-icon name="lucideSearch" />
          <input placeholder="Type a command or search..." brnCmdInput hlm />
        </hlm-cmd-input-wrapper>
        <div *brnCmdEmpty hlmCmdEmpty>No results found.</div>
        <brn-cmd-list hlm>
          <brn-cmd-group hlm>
            <ng-container *ngFor="let item of data">
              <button brnCmdItem hlm>
                <hlm-avatar class="h-8 w-8" hlmCmdIcon>
                  <img [src]="item.profileImageURL" hlmAvatarImage />
                  <span class="text-white bg-destructive" hlmAvatarFallback>{{
                    item.login
                  }}</span>
                </hlm-avatar>
                {{ item.username }}
              </button>
              <brn-cmd-separator hlm></brn-cmd-separator>
            </ng-container>
          </brn-cmd-group>
        </brn-cmd-list>
      </brn-cmd>
    </brn-dialog>
  `,
})
export class CommandComponent {
  data = mockResponse[0].result.data ?? [];

  public command = signal('');
  public state = signal<'closed' | 'open'>('closed');

  @HostListener('document:keydown.control./', ['$event']) // Listen for keydown with ctrl and slash
  onKeyDown1(event: KeyboardEvent) {
    if (event.ctrlKey && event.key === '/') {
      console.debug('open');
      this.state.set('open');
    }
  }

  stateChanged(state: 'open' | 'closed') {
    console.debug('stateChanged', state);
    this.state.set(state);
  }

  commandSelected(selected: string) {
    this.state.set('closed');
    this.command.set(selected);
  }
}
