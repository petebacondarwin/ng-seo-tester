import { Injectable } from '@angular/core';
import { Location } from '@angular/common';

export interface Page {
  url: string;
  title: string;
  timeout: number;
  noindex: boolean;
}

@Injectable()
export class Navigation {
  pages: { [url: string]: Page } = {
    '': { url: '/', title: 'Home', timeout: 0, noindex: false },
    '/apple': { url: '/apple', title: 'Apple', timeout: 1000, noindex: true },
    '/apricot': { url: '/apricot', title: 'Apricot', timeout: 2000, noindex: false },
    '/avocado': { url: '/avocado', title: 'Avocado', timeout: 3000, noindex: true },
    '/banana': { url: '/banana', title: 'Banana', timeout: 4000, noindex: false },
    '/bilberry': { url: '/bilberry', title: 'Bilberry', timeout: 5000, noindex: true },
    '/blackberry': { url: '/blackberry', title: 'Blackberry', timeout: 6000, noindex: false },
    '/blackcurrant': { url: '/blackcurrant', title: 'Blackcurrant', timeout: 7000, noindex: true },
    '/blueberry': { url: '/blueberry', title: 'Blueberry', timeout: 8000, noindex: false },
    '/never': { url: '/never', title: 'Never', timeout: 1000000, noindex: true }
  };
  links = Object.keys(this.pages).map(url => this.pages[url]);
  current = this.pages[this.location.path()];

  constructor(private location: Location) {
    (window as any).log('Navigation constructor');
  }
}
