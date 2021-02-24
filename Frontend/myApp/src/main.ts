import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment,googleApi } from './environments/environment';

if (environment.production) {
  enableProdMode();
}
const key = googleApi.key;
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
