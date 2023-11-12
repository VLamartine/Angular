import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { AppRoutingModule } from './app/app-routing.module';
import { importProvidersFrom } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

bootstrapApplication(AppComponent, {
  providers: [importProvidersFrom([AppRoutingModule, BrowserAnimationsModule])],
});
