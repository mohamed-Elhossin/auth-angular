import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import {
  HTTP_INTERCEPTORS,
  provideHttpClient,
  withInterceptors,
  } from '@angular/common/http';
import { routes } from './app.routes';
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';
import { provideToastr } from 'ngx-toastr';
import { authMiddelwereInterceptor } from './core/auth-middelwere.interceptor';
import { loadingInterceptor } from './core/interceptors/loading.interceptor';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HttpErrorResponse } from '@angular/common/http';
export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(withInterceptors([authMiddelwereInterceptor , loadingInterceptor ])),
    provideAnimations(), // required animations providers
    provideToastr(), // Toastr providers
    importProvidersFrom(BrowserAnimationsModule), provideAnimationsAsync()
    // { provide: HTTP_INTERCEPTORS, useClass: authMiddelwereInterceptor, multi: true }
  ],
};
