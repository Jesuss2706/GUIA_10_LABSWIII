import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Categorias } from './pages/categorias/categorias';
import { Productos } from './pages/productos/productos';
import { Solicitudes } from './pages/solicitudes/solicitudes';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'categorias', component: Categorias },
  { path: 'productos', component: Productos},
  { path: 'solicitudes', component: Solicitudes},
  { path: '**', redirectTo: ''}
];
