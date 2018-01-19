import { Component } from '@angular/core';
import { Navigation } from './navigation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public nav: Navigation) {
    (window as any).log('AppComponent constructor');
  }
}
