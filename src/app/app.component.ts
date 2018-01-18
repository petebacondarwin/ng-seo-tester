import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pages = {
    '/apple': 'Apple',
    '/apricot': 'Apricot',
    '/avocado': 'Avocado',
    '/banana': 'Banana',
    '/bilberry': 'Bilberry',
    '/blackberry': 'Blackberry',
    '/blackcurrant': 'Blackcurrant',
    '/blueberry': 'Blueberry',
  };

  links = Object.keys(this.pages).map(url => ({ url, text: this.pages[url] }));

  title: string;
  constructor(l: Location) {
    this.title = this.pages[l.path()];
  }
}
