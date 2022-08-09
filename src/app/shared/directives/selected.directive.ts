import { Directive, HostBinding, Input, OnChanges } from '@angular/core';

@Directive({
  selector: '[appSelected]'
})
export class SelectedDirective implements OnChanges {
  @Input() private appSelected?: boolean;
  @HostBinding('style.backgroundColor') private backgroundColor?: string;
  @HostBinding('style.fontWeight') private fontWeight?: string;
  @HostBinding('style.color') private color?: string;

  ngOnChanges(): void {
    if (this.appSelected) {
        this.backgroundColor = 'var(--primary)';
        this.fontWeight = '500';
        this.color = 'White';
      } else {
        this.backgroundColor = 'white';
        this.fontWeight = '400';
        this.color = 'var(--text-regular)';
    }

  }

  constructor() { }

}
