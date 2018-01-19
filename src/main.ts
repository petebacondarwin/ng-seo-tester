import { enableProdMode } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { Navigation } from './app/navigation.service';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .then(ref => {
    (window as any).log('Bootstrapped');
    const nav = ref.injector.get(Navigation);
    setTimeout(() => {
      const meta = ref.injector.get(Meta);
      if (nav.current.noindex) {
        meta.addTag({ name: 'googlebot', content: 'noindex' });
        (window as any).log('noindex added');
      } else {
        meta.removeTag('name="googlebot"');
        (window as any).log('noindex removed');
      }
    }, nav.current.timeout);
  })
  .catch(err => (window as any).log(err));
