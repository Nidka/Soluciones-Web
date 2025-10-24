import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

// esta vaina es de cuando tu te registras ps y piden confirmacion de contra bla bla xd
export function passwordMatchValidator(group: FormGroup) {
  const password = group.get('password')?.value;
  const confirmPassword = group.get('confirmPassword')?.value;
  return password === confirmPassword ? null : { mismatch: true }; 
}

@Component({
  selector: 'app-register',
  standalone: true, 
  imports: [
    CommonModule,
    ReactiveFormsModule, 
    RouterModule
  ],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  loading: boolean = false;
  successMessage: string = '';
  errorMessage: string = '';

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    }, { validators: passwordMatchValidator }); // Aplica el validador global
  }

  ngOnInit(): void { }

  onSubmit(): void {
    if (this.registerForm.invalid) {
      this.registerForm.markAllAsTouched();
      return;
    }

    this.loading = true;
    this.errorMessage = '';
    this.successMessage = '';

    const { name, email, password } = this.registerForm.value;
    console.log('Intentando registrar:', name, email);

    // Lógica de REGISTRO (Simulación)
    setTimeout(() => {
      this.loading = false;
      if (email === 'exists@example.com') {
        this.errorMessage = 'Este correo ya está registrado.';
      } else {
        this.successMessage = '¡Registro exitoso! Redireccionando a login...';
        setTimeout(() => this.router.navigate(['/auth/login']), 1500); // Redirige a Login
      }
    }, 1500);
  }
}
