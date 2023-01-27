import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'popover-tutorial';
  popoverLink = {
    href: '',
    text: 'Link to Page'
  }
}
