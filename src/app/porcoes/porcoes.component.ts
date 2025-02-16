import { Component } from '@angular/core';
import { MenuComponent } from '../components/menu/menu.component';
import { PoPageModule, PoToolbarModule } from '@po-ui/ng-components';

@Component({
  selector: 'app-porcoes',
  imports: [PoToolbarModule, PoPageModule, MenuComponent],
  templateUrl: './porcoes.component.html',
  styleUrl: './porcoes.component.css'
})
export class PorcoesComponent {

}
