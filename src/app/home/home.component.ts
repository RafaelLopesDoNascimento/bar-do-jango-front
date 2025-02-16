import { Component } from '@angular/core';
import { MenuComponent } from '../components/menu/menu.component';
import { PoPageModule, PoToolbarModule } from '@po-ui/ng-components';

@Component({
  selector: 'app-home',
  imports: [MenuComponent, PoToolbarModule, PoPageModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
