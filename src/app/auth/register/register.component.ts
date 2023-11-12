import { AuthService } from '@services/auth.service';
import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { IRegister } from '@interfaces/auth';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { RouterLink } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

interface IRegisterForm {
  name: FormControl<string>;
  email: FormControl<string>;
  password: FormControl<string>;
  confirmPassword: FormControl<string>;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  standalone: true,
  imports: [
    MatCardModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    RouterLink,
    MatCardModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
  ],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup<IRegisterForm>;

  constructor(
    private fb: NonNullableFormBuilder,
    private authService: AuthService
  ) {
    this.registerForm = this.fb.group<IRegisterForm>({
      name: this.fb.control('', [Validators.required]),
      email: this.fb.control('', [Validators.required]),
      password: this.fb.control('', [
        Validators.required,
        Validators.minLength(6),
      ]),
      confirmPassword: this.fb.control('', [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    if (this.registerForm.invalid) {
      return;
    }

    const body: IRegister = {
      name: this.registerForm.get('name')?.value ?? '',
      email: this.registerForm.get('email')?.value ?? '',
      password: this.registerForm.get('password')?.value ?? '',
      confirmPassword: this.registerForm.get('confirmPassword')?.value ?? '',
    };

    this.authService.register(body);
  }
}
