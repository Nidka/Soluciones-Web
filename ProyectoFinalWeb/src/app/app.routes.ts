import { Routes } from '@angular/router';

export const routes: Routes = [
  // Ruta por defecto - redirige a login
  {
    path: '',
    redirectTo: '/auth/login',
    pathMatch: 'full'
  },
  
  // Rutas de autenticación
  {
    path: 'auth/login',
    loadComponent: () => import('./features/auth/login/login.component').then(m => m.LoginComponent)
  },
  {
    path: 'auth/register',
    loadComponent: () => import('./features/auth/register/register.component').then(m => m.RegisterComponent)
  },
  {
    path: 'auth/forgot-password',
    loadComponent: () => import('./features/auth/forgot-password/forgot-password.component').then(m => m.ForgotPasswordComponent)
  },
  
  // Ruta del dashboard
  {
    path: 'dashboard',
    loadComponent: () => import('./features/dashboard/home/home.component').then(m => m.HomeComponent)
  },
  
  // Rutas de citas
  {
    path: 'appointments',
    children: [
      {
        path: 'list',
        loadComponent: () => import('./features/appointments/list/list.component').then(m => m.ListComponent)
      },
      {
        path: 'create',
        loadComponent: () => import('./features/appointments/create/create.component').then(m => m.CreateComponent)
      },
      {
        path: 'detail/:id',
        loadComponent: () => import('./features/appointments/detail/detail.component').then(m => m.DetailComponent)
      }
    ]
  },
  
  // Rutas de barberos
  {
    path: 'barbers',
    children: [
      {
        path: 'list',
        loadComponent: () => import('./features/barbers/list/list.component').then(m => m.ListComponent)
      },
      {
        path: 'detail/:id',
        loadComponent: () => import('./features/barbers/detail/detail.component').then(m => m.DetailComponent)
      },
      {
        path: 'manage',
        loadComponent: () => import('./features/barbers/manage/manage.component').then(m => m.ManageComponent)
      }
    ]
  },
  
  // Rutas de usuarios
  {
    path: 'users',
    children: [
      {
        path: 'profile',
        loadComponent: () => import('./features/users/profile/profile.component').then(m => m.ProfileComponent)
      },
      {
        path: 'edit-profile',
        loadComponent: () => import('./features/users/edit-profile/edit-profile.component').then(m => m.EditProfileComponent)
      }
    ]
  },
  
  // Ruta 404 - Not Found
  {
    path: '**',
    redirectTo: '/auth/login'
  }
];
