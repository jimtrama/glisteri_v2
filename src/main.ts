import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

platformBrowserDynamic()
  .bootstrapModule(AppModule, {
    ngZoneEventCoalescing: true,
  })
  .then(() => {
    document.getElementById('loader')?.remove();
  })
  .catch((err) => console.error(err));
