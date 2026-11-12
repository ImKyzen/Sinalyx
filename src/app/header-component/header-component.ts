import { Component } from '@angular/core';
import { ScrollService } from '../Services/scroll-service';

@Component({
  selector: 'app-header-component',
  standalone: false,
  templateUrl: './header-component.html',
  styleUrl: './header-component.css',
})
export class HeaderComponent {
  isMenuCollapsed = true;


  constructor(private scroll: ScrollService) { }

  goTo(id: string, event: Event) {
    event.preventDefault();
    this.isMenuCollapsed = true;
    this.scroll.goTo(id);
  }
}
