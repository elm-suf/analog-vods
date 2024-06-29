import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
  signal,
} from '@angular/core';
import { provideIcons } from '@ng-icons/core';
import {
  lucideCalendar,
  lucideCog,
  lucideLayers,
  lucidePlus,
  lucideSearch,
  lucideSmile,
  lucideUser,
  lucideX,
} from '@ng-icons/lucide';
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
import { HlmCodeDirective } from '@spartan-ng/ui-typography-helm';
import { mockResponse } from './mock.data';
import { NgFor } from '@angular/common';
import {
  HlmAvatarImageDirective,
  HlmAvatarComponent,
  HlmAvatarFallbackDirective,
} from '@spartan-ng/ui-avatar-helm';

@Component({
  selector: 'app-vods-command-dialog',
  standalone: true,
  providers: [
    provideIcons({
      lucideX,
      lucideCalendar,
      lucideSmile,
      lucidePlus,
      lucideUser,
      lucideLayers,
      lucideCog,
      lucideSearch,
    }),
  ],
  imports: [
    BrnCommandImports,
    HlmCommandImports,
    HlmIconComponent,
    HlmButtonDirective,
    HlmAvatarImageDirective,
    HlmAvatarComponent,
    HlmAvatarFallbackDirective,
    BrnDialogComponent,
    BrnDialogCloseDirective,
    BrnDialogTriggerDirective,
    BrnDialogContentDirective,
    BrnDialogOverlayComponent,
    HlmDialogOverlayDirective,
    HlmCodeDirective,
    NgFor,
  ],
  template: `
    <div
      (click)="state.set('open')"
      class="cursor-pointer flex items-center justify-center py-20 mx-auto text-sm max-w-screen-sm space-x-4"
    >
      <p>
        Press
        <code hlmCode>⌘ + /</code>
        to search users
      </p>
    </div>
    <brn-dialog
      closeDelay="100"
      [state]="state()"
      (stateChanged)="stateChanged($event)"
    >
      <brn-dialog-overlay hlm />
      <brn-cmd
        *brnDialogContent="let ctx"
        hlmCmdDialog
        class="mx-auto sm:w-[400px]"
      >
        <hlm-cmd-input-wrapper>
          <hlm-icon name="lucideSearch" />
          <input placeholder="Type a command or search..." brnCmdInput hlm />
          <button brnDialogClose hlmCmdDialogCloseBtn>
            <hlm-icon name="lucideX" />
          </button>
        </hlm-cmd-input-wrapper>
        <div *brnCmdEmpty hlmCmdEmpty>No results found.</div>
        <brn-cmd-list hlm>
          <brn-cmd-group hlm>
            @for (item of data; track item.id) {
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
            }
          </brn-cmd-group>
        </brn-cmd-list>
      </brn-cmd>
    </brn-dialog>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CommandDialogComponent {
  data = mockResponse[0].result.data ?? [];

  public command = signal('');
  public state = signal<'closed' | 'open'>('closed');
  @HostListener('window:keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    if ((event.metaKey || event.ctrlKey) && event.key === '/') {
      this.state.set('open');
      event.preventDefault();
    }
  }
  stateChanged(state: 'open' | 'closed') {
    this.state.set(state);
  }

  commandSelected(selected: string) {
    this.state.set('closed');
    this.command.set(selected);
  }
}
export const commandDialogCode = `
`;
