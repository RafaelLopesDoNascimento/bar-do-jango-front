import { Component } from '@angular/core';
import { PoToolbarModule, PoPageModule } from '@po-ui/ng-components';
import { MenuComponent } from '../components/menu/menu.component';

@Component({
  selector: 'app-refrigerantes',
  imports: [PoToolbarModule, PoPageModule, MenuComponent],
  templateUrl: './refrigerantes.component.html',
  styleUrl: './refrigerantes.component.css'
})
export class RefrigerantesComponent {

}
