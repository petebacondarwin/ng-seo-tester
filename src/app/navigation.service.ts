import { Injectable } from '@angular/core';
import { Location } from '@angular/common';

export interface Page {
  url: string;
  title: string;
  timeout: number;
}

@Injectable()
export class Navigation {
  pages: { [url: string]: Page } = {
    '': { url: '/', title: 'Home', timeout: 0 },
    '/apple': { url: '/apple', title: 'Apple', timeout: 1000 },
    '/apricot': { url: '/apricot', title: 'Apricot', timeout: 2000 },
    '/avocado': { url: '/avocado', title: 'Avocado', timeout: 3000 },
    '/banana': { url: '/banana', title: 'Banana', timeout: 4000 },
    '/bilberry': { url: '/bilberry', title: 'Bilberry', timeout: 5000 },
    '/blackberry': { url: '/blackberry', title: 'Blackberry', timeout: 6000 },
    '/blackcurrant': { url: '/blackcurrant', title: 'Blackcurrant', timeout: 7000 },
    '/blueberry': { url: '/blueberry', title: 'Blueberry', timeout: 8000 },
    '/never': { url: '/never', title: 'Never', timeout: 1000000 }
  };
  links = Object.keys(this.pages).map(url => this.pages[url]);
  current = this.pages[this.location.path()];

  constructor(private location: Location) {
    (window as any).log('Navigation constructor');
  }
}
