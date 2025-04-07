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
  collapsedAnswer: boolean;

  constructor(private router: Router, private api: ServiceRestService) {
    this.collapsedAnswer = true;
    this.imagens = [
      { src: '/porcoes-png/fritas.png', alt: 'Fritas Imagem', value: 35.0, namePorcao:  'Batata Frita', weight: 700},
      { src: '/porcoes-png/camarao.png', alt: 'Camarão Imagem', value: 55.0, namePorcao:  'Camarão', weight: 500},
      { src: '/porcoes-png/frango.png', alt: 'Frango Imagem', value: 35.0, namePorcao:  'Frango', weight: 500},
      { src: '/porcoes-png/isca-de-peixe.png',alt: 'Isca de peixe Imagem',value: 35.0, namePorcao:  'Isca de Peixe', weight: 500},
      {src: '/porcoes-png/isca-de-peixe.png',alt: 'Churrasco Imagem', value: 60.0, namePorcao:  'Churrasco', weight: 600},
    ];
  }
 

  callImagens() {
    return this.imagens;
  }
}
