import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PopoverModule } from './modules/popover/popover.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PopoverModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
