import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { EspecialidadesComponent } from './components/especialidades/especialidades.component';
import { SobreNosotrosComponent } from './components/sobre-nosotros/sobre-nosotros.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { PromosComponent } from './components/promos/promos.component';
import { CarritoComponent } from './components/carrito/carrito.component';
export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'inicio', component: HomeComponent },
  { path: 'especialidades', component: EspecialidadesComponent },
  { path: 'nosotros', component: SobreNosotrosComponent },
  { path: 'contactar', component: ContactoComponent },
  { path: 'promos', component: PromosComponent},
    { path: 'carrito', component: CarritoComponent }
];
