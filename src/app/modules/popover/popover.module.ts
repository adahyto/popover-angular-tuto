import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PopoverComponent } from './components/popover/popover.component';
import { PopoverTriggerComponent } from './components/popover-trigger/popover-trigger.component';
import { PopoverContentComponent } from './components/popover-content/popover-content.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    PopoverComponent,
    PopoverTriggerComponent,
    PopoverContentComponent,
  ],
  exports: [PopoverComponent,]
})
export class PopoverModule { }