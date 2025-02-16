import { Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { BebidasComponent } from './bebidas.component';

export const BEBIDAS_ROUTES: Routes = [
  {path: "", component: BebidasComponent},
  // {path: "bebidas", component: HomeComponent}
];
