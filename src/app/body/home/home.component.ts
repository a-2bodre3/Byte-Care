import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  standalone:true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  @Output() Selected = new EventEmitter<string>();
  onSelect(componentName:string){
    this.Selected.emit(componentName);
  }
}
