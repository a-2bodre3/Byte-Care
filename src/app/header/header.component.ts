import {Component, EventEmitter, HostListener, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }



  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    if (window.innerWidth > 768) {
      this.isMenuOpen = false;
    }
  }
  @Output() Selected = new EventEmitter<string>();
  onSelect(componentName:string){
    this.Selected.emit(componentName);
  }
}
