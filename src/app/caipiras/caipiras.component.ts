import { Component } from '@angular/core';
import { PoToolbarModule, PoPageModule } from '@po-ui/ng-components';
import { MenuComponent } from '../components/menu/menu.component';

@Component({
  selector: 'app-caipiras',
  imports: [PoToolbarModule, PoPageModule, MenuComponent],
  templateUrl: './caipiras.component.html',
  styleUrl: './caipiras.component.css'
})
export class CaipirasComponent {

}
