import { Injectable } from '@angular/core';
import { IRegister, ILogin } from '@interfaces/auth';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  constructor() {
    this.loggedIn.next(!!localStorage.getItem('token'));
  }

  register(body: IRegister) {
    localStorage.setItem('token', 'mytoken');
    this.loggedIn.next(true);
  }

  login(body: ILogin) {
    console.log('chamando');
    localStorage.setItem('token', 'mytoken');
    this.loggedIn.next(true);
  }

  logout() {
    localStorage.clear();
  }

  isLoggedIn(): boolean {
    return this.loggedIn.value;
  }
}
