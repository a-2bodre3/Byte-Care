import { Component } from '@angular/core';
import {HeaderComponent} from './header/header.component';
import {HomeComponent} from './body/home/home.component';
import {ServicesComponent} from './body/services/services.component';

@Component({
  selector: 'app-root',
  standalone:true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [
    HeaderComponent,
    HomeComponent,
    ServicesComponent,
  ]
})
export class AppComponent {
  activeComponent = 'home';
  onNavigate(componentName: string) {
    this.activeComponent = componentName;
  }
}
