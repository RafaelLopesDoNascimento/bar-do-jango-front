import { Component } from '@angular/core';
import { PoPageModule, PoToolbarModule } from '@po-ui/ng-components';
import { MenuComponent } from '../components/menu/menu.component';

@Component({
  selector: 'app-clients',
  imports: [PoToolbarModule, PoPageModule, MenuComponent],
  templateUrl: './clients.component.html',
  styleUrl: './clients.component.css'
})
export class ClientsComponent {

}
