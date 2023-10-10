import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '@services/auth.service';
export const AuthGuard: CanActivateFn = (route, state) => {
  return inject(AuthService).isLoggedIn()
    ? true
    : inject(Router).createUrlTree(['/login']);
};
