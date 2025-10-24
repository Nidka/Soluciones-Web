import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router'; 
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule], //Dependencias q se importan
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  loginForm: FormGroup;
  loading: boolean = false;
  errorMessage: string = '';

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  ngOnInit(): void { }

  onSubmit(): void {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    this.loading = true;
    this.errorMessage = '';

    const { email, password } = this.loginForm.value;

    console.log('Intentando iniciar sesión con:', email);

    // Lógica de AUTENTICACIÓN (Simulación)
    setTimeout(() => {
      this.loading = false;
      if (email === 'test@example.com' && password === 'password') {
        console.log('Inicio de sesión exitoso!');
        this.router.navigate(['/dashboard']); // Redirigir a una ruta protegida
      } else {
        this.errorMessage = 'Credenciales inválidas. Verifica tu email y contraseña.';
      }
    }, 1500);
  }
}
