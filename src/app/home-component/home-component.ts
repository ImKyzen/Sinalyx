import { Component } from '@angular/core';
import { ScrollService } from '../Services/scroll-service';

@Component({
  selector: 'app-home-component',
  standalone: false,
  templateUrl: './home-component.html',
  styleUrl: './home-component.css',
})
export class HomeComponent { 
  constructor(private scroll: ScrollService) {}

  goTo(id: string, event: Event) {
    event.preventDefault();
    this.scroll.goTo(id);
  }
}
