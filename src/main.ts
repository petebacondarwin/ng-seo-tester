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
    console.log('Bootstrapped');
    const nav = ref.injector.get(Navigation);
    setTimeout(() => {
      const meta = ref.injector.get(Meta);
      meta.removeTag('name="googlebot"');
      console.log('noindex removed');
    }, nav.current.timeout);
  })
  .catch(err => console.log(err));
