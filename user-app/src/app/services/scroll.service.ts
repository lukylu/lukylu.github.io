import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ScrollService {
  private _active = new BehaviorSubject<string>('hero');
  activeSection$ = this._active.asObservable();

  private sections = [
    'hero','about','education','experience','languages','skills','projects','contact'
  ];

  observe() {
    const observer = new IntersectionObserver(
      entries => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            this._active.next(entry.target.id);
          }
        }
      },
      { threshold: 0.4 }
    );

    this.sections.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
  }
}
