import { Component } from '@angular/core';
import { AuthService } from '@services/auth.service';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
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
