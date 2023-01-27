import { Component, Input, OnInit } from '@angular/core';
import { IPopoverLink } from '../popover-content/popover-content.component';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss']
})
export class PopoverComponent implements OnInit {
  @Input() position: string = '';
  @Input() title?: string;
  @Input() content?: string;
  @Input() popoverLink?: IPopoverLink;
  isPopoverOpen = false;

  constructor() { }

  ngOnInit(): void {
  }

  togglePopover(): void {
    this.isPopoverOpen = !this.isPopoverOpen;
  }

}
