import { Component } from '@angular/core';
import {
  PoMenuItem,
  PoMenuModule,
  PoPageModule,
  PoToolbarModule,
} from '@po-ui/ng-components';

import { Router } from '@angular/router';
import { ServiceRestService } from '../services/service-rest.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-bebidas',
  imports: [PoToolbarModule, PoPageModule, PoMenuModule, CommonModule],
  templateUrl: './bebidas.component.html',
  styleUrl: './bebidas.component.css',
})
export class BebidasComponent {
  imagens: Array<any>;
  collapsedAnswer: boolean;

  constructor(private router: Router, private api: ServiceRestService) {
    this.collapsedAnswer = true;
    this.imagens = [
      { src: '/cervejas-png/original.jpeg', alt: 'Fritas Imagem', value: 35.0,  namePorcao: 'Batata Frita', weight: 700},
      { src: '/cervejas-png/skol.jpeg', alt: 'Fritas Imagem', value: 35.0,  namePorcao: 'Batata Frita', weight: 700},
      { src: '/cervejas-png/heinekein.jpeg', alt: 'Fritas Imagem', value: 35.0,  namePorcao: 'Batata Frita', weight: 700},
      { src: '/cervejas-png/brahma.jpeg', alt: 'Fritas Imagem', value: 35.0,  namePorcao: 'Batata Frita', weight: 700},
      { src: '/cervejas-png/antartica.jpeg', alt: 'Fritas Imagem', value: 35.0,  namePorcao: 'Batata Frita', weight: 700},
      { src: '/cervejas-png/amstel.jpeg', alt: 'Fritas Imagem', value: 35.0,  namePorcao: 'Batata Frita', weight: 700},
    ];
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

  callImagens() {
    return this.imagens;
  }
}
