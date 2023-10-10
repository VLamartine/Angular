import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AuthModule } from './auth/auth.module';
import { AuthService } from '@services/auth.service';
import { HomeComponent } from './shared/home/home.component';

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    BrowserAnimationsModule,
    MatToolbarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  isLogged: boolean = false;

  constructor(private authService: AuthService) {
    this.authService.loggedIn.subscribe({
      next: (loggedIn) => {
        this.isLogged = loggedIn;
      },
    });
  }
}
