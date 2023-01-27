import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-popover-trigger',
  templateUrl: './popover-trigger.component.html',
  styleUrls: ['./popover-trigger.component.scss']
})
export class PopoverTriggerComponent implements OnInit {
  @Output() togglePopover: EventEmitter<void> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  TogglePopover(): void {
    this.togglePopover.emit();
  }
}
