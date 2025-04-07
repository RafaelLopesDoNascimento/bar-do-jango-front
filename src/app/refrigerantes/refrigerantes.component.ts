import { Component } from '@angular/core';
import {
  PoMenuItem,
  PoMenuModule,
  PoPageModule,
  PoToolbarModule,
} from '@po-ui/ng-components';
import { MenuBarComponent } from '../components/menu-bar/menu.component';
import { Router } from '@angular/router';
import { ServiceRestService } from '../services/service-rest.service';

@Component({
  selector: 'app-refrigerantes',
  imports: [PoToolbarModule, PoPageModule, PoMenuModule],
  templateUrl: './refrigerantes.component.html',
  styleUrl: './refrigerantes.component.css'
})
export class RefrigerantesComponent {
    collapsedAnswer: boolean;
  
    constructor(private router: Router, private api: ServiceRestService) {
      this.collapsedAnswer = true;
    }
   
}
