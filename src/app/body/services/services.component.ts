import {Component, EventEmitter, Output} from '@angular/core';
import {ServicesName} from './services-name';

@Component({
  selector: 'app-services',
  standalone:true,
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {
  Services = ServicesName;
  @Output() Selected = new EventEmitter<string>();
  onSelect(componentName:string){
    this.Selected.emit(componentName);
  }
}
