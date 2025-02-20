import { Routes } from '@angular/router';

export const routes: Routes = [
  {path: '', loadChildren: ()=> import('./home/home.routes').then(m => m.HOME_ROUTES)},
  {path: 'home', loadChildren: ()=> import('./home/home.routes').then(m => m.HOME_ROUTES)},
  {path: 'porcoes', loadChildren: ()=> import('./porcoes/porcoes.routes').then(m => m.PORCOES_ROUTES)},
  {path: 'refrigerantes', loadChildren: ()=> import('./refrigerantes/refrigerantes.routes').then(m => m.REFRIGERANTE_ROUTES)},
  {path: 'bebidas', loadChildren: ()=> import('./bebidas/bebidas.routes').then(m => m.BEBIDAS_ROUTES)},
  {path: 'clients', loadChildren: ()=> import('./clients/clients.routes').then(m => m.CLIENTS_ROUTES)},
  {path: 'caipiras', loadChildren: ()=> import('./caipiras/caipiras.routes').then(m => m.CAIPIRAS_ROUTES)},


];
