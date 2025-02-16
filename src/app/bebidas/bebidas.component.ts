import { Component } from '@angular/core';
import { PoPageModule, PoToolbarModule } from '@po-ui/ng-components';
import { MenuComponent } from '../components/menu/menu.component';

@Component({
  selector: 'app-bebidas',
  imports: [PoToolbarModule, PoPageModule, MenuComponent],
  templateUrl: './bebidas.component.html',
  styleUrl: './bebidas.component.css'
})
export class BebidasComponent {

}
