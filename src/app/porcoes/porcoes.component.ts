import { Component } from '@angular/core';
import {
  PoMenuItem,
  PoMenuModule,
  PoPageModule,
  PoToolbarModule,
} from '@po-ui/ng-components';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ServiceRestService } from '../services/service-rest.service';

@Component({
  selector: 'app-porcoes',
  imports: [
    PoToolbarModule,
    PoPageModule,
    CommonModule,
    PoMenuModule
  ],
  templateUrl: './porcoes.component.html',
  styleUrl: './porcoes.component.css',
})
export class PorcoesComponent {
  imagens: Array<any>;
  serviceClients: ServiceRestService;
  collapsedAnswer: boolean;

  constructor(private router: Router) {
    this.serviceClients = '';
    this.collapsedAnswer = true;
    this.imagens = [
      { src: '/porcoes-png/batata.jpg', alt: 'Fritas Imagem', value: 35.0 },
      { src: '/porcoes-png/camarao.png', alt: 'Camarão Imagem', value: 55.0 },
      { src: '/porcoes-png/frango.png', alt: 'Frango Imagem', value: 35.0 },
      {
        src: '/porcoes-png/isca-de-peixe.png',
        alt: 'Isca de peixe Imagem',
        value: 35.0,
      },
      {
        src: '/porcoes-png/isca-de-peixe.png',
        alt: 'Churrasco Imagem',
        value: 60.0,
      },
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
