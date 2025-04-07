import { Component } from '@angular/core';
import { MenuBarComponent } from '../components/menu-bar/menu.component';
import {
  PoMenuItem,
  PoMenuModule,
  PoPageModule,
  PoToolbarModule,
} from '@po-ui/ng-components';
import { Router } from '@angular/router';
import { ServiceRestService } from '../services/service-rest.service';

@Component({
  selector: 'app-home',
  imports: [PoToolbarModule, PoPageModule, PoMenuModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {

  constructor(private router: Router, private api: ServiceRestService) {
  }
 
}
