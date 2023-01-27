import { Component, Input, OnInit } from '@angular/core';

export interface IPopoverLink {
  href: string;
  text: string;
}
@Component({
  selector: 'app-popover-content',
  templateUrl: './popover-content.component.html',
  styleUrls: ['./popover-content.component.scss']
})
export class PopoverContentComponent implements OnInit {
  @Input() title?: string;
  @Input() content?: string;
  @Input() link?: IPopoverLink;
  constructor() { }

  ngOnInit(): void {
  }

}
