import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-scroll-progress',
  standalone: true,
  imports: [CommonModule],
  template: `<div class="progress-bar" [style.width.%]="progress"></div>`,
  styleUrl: './scroll-progress.component.css'
})
export class ScrollProgressComponent {
  progress = 0;

  @HostListener('window:scroll')
  onScroll() {
    const el   = document.documentElement;
    const top  = el.scrollTop  || document.body.scrollTop;
    const height = el.scrollHeight - el.clientHeight;
    this.progress = height ? (top / height) * 100 : 0;
  }
}
