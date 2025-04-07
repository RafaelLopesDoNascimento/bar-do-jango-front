import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

import {
  PoMenuItem,
  PoMenuModule,
  PoPageModule,
  PoToolbarModule,
} from '@po-ui/ng-components';

@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    PoToolbarModule,
    PoMenuModule,
    PoPageModule,
    RouterOutlet
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  constructor(private router: Router) {
    
  }

  menus: Array<PoMenuItem> = [
    {
      label: 'Home',
      action: () => this.router.navigate(['home']),
      icon: 'an-fill an-house',
      shortLabel: 'Home',
    },
    {
      label: 'Porções',
      action: () => this.router.navigate(['porcoes']),
      icon: 'an-fill an-bowl-food',
      shortLabel: 'Porções',
    },
    {
      label: 'Bebidas',
      icon: 'an-fill an-beer-bottle',
      shortLabel: 'Bebidas',
      subItems: [
        {
          label: 'Cervejas',
          action: () => this.router.navigate(['bebidas']),
          icon: 'an-fill an-beer-stein',
          shortLabel: 'Cervejas',
        },
        {
          label: 'Refrigerantes',
          action: () => this.router.navigate(['refrigerantes']),
          icon: 'an-fill an-pint-glass',
          shortLabel: 'Refrigerantes',
        },
        {
          label: 'Caipiras',
          action: () => this.router.navigate(['caipiras']),
          icon: 'an-fill an-wine',
          shortLabel: 'Caipiras',
        },
      ],
    },
    {
      label: 'Pagar',
      icon: 'an-fill an-money',
      shortLabel: 'Pagar',
    },
    {
      label: 'Clientes',
      icon: 'an-fill an-users-three',
      shortLabel: 'Clientes',
      action: () => this.router.navigate(['clients']),
    },
  ];
}
