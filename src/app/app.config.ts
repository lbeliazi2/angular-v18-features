import {ApplicationConfig, provideExperimentalZonelessChangeDetection, provideZoneChangeDetection} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export const appConfig: ApplicationConfig = {
  // 2. Coalescing
  // with using coalescing we reduce the unnecessary change detection cycles and improve performance
  // if you use zoneless you will not need to downgrade async/await to promises - helps you debug and make your bundles smaller
  providers: [
    //provideZoneChangeDetection({ eventCoalescing: true}),
    provideExperimentalZonelessChangeDetection(),
    provideRouter(routes), provideAnimationsAsync()]
};
