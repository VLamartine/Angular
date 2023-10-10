import { Component, Input, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
  NonNullableFormBuilder,
} from '@angular/forms';
import { ILogin } from '@interfaces/auth';
import { AuthService } from '@services/auth.service';

interface ILoginForm {
  email: FormControl<string>;
  password: FormControl<string>;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup<ILoginForm>;

  constructor(
    private fb: NonNullableFormBuilder,
    private authService: AuthService
  ) {
    this.loginForm = this.fb.group<ILoginForm>({
      email: this.fb.control('', [Validators.required]),
      password: this.fb.control('', [Validators.required]),
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    if (this.loginForm.invalid) {
      return;
    }
    const body: ILogin = {
      email: this.loginForm.value.email ?? '',
      password: this.loginForm.value.password ?? '',
    };
    this.authService.login(body);
  }
}
