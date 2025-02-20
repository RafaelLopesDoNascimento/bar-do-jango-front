import { Component } from '@angular/core';
import { MenuComponent } from '../components/menu/menu.component';
import { PoPageModule, PoToolbarModule } from '@po-ui/ng-components';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-porcoes',
  imports: [PoToolbarModule, PoPageModule, MenuComponent, CommonModule],
  templateUrl: './porcoes.component.html',
  styleUrl: './porcoes.component.css',
})
export class PorcoesComponent {
  imagens: Array<any>;

  constructor() {
    this.imagens = [
      { src: '/porcoes-png/fritas.png', alt: 'Fritas Imagem' },
      { src: '/porcoes-png/camarao.png', alt: 'Fritas Imagem' },
      { src: '/porcoes-png/frango.png', alt: 'Fritas Imagem' },
      { src: '/porcoes-png/isca-de-peixe.png', alt: 'Fritas Imagem' },
    ];
  }

  callImagens() {
    return this.imagens;
  }
  
}
