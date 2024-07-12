import {
  ApplicationConfig,
  importProvidersFrom,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { NgxsModule } from '@ngxs/store';
import { routes } from './app.routes';
import { AppState } from './store/app.state';

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(NgxsModule.forRoot([AppState])),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
  ],
};
