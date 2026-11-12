import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ScrollService {
  constructor(private router: Router) {}

  async goTo(id: string): Promise<void> {
    const path = this.router.url.split('#')[0];
    if(path != '/') {
      await this.router.navigateByUrl('/');
    }
    
    setTimeout(() => {
      const el = document.getElementById(id);
      if(!el) return;
      el.scrollIntoView({ behavior: 'smooth', block: 'start'});  
    }, 80);
  }
}
