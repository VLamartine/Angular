import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Component } from '@angular/core';
import { AuthService } from '@services/auth.service';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    SidebarComponent,
    RouterModule,
    CommonModule,
  ],
})
export class AppComponent {
  title = 'Way';
  isLogged: boolean = false;
  sidebarOpen: boolean = false;

  constructor(
    private authService: AuthService,
    private breakpointObserver: BreakpointObserver
  ) {
    this.authService.loggedIn.subscribe({
      next: (loggedIn) => {
        this.isLogged = loggedIn;
      },
    });

    this.breakpointObserver
      .observe(['(max-width: 768px)'])
      .subscribe((result: BreakpointState) => {
        this.sidebarOpen = !result.matches;
      });
  }

  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  }
}
