import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-scroll-progress',
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  template: `
    <div id="sprog"><div id="sprogfill"></div></div>
  `,
  styles: [`
    #sprog {
      position: fixed; top: 0; left: 0; right: 0;
      height: 3px; z-index: 7000;
      background: rgba(0,255,255,.1);
    }
    #sprogfill {
      height: 100%;
      background: linear-gradient(90deg, var(--cyan), var(--magenta));
      box-shadow: 0 0 8px var(--cyan);
      width: 0%;
      transition: width .1s;
    }
  `]
})
export class ScrollProgressComponent implements OnInit, OnDestroy {
  private scrollHandler!: () => void;

  ngOnInit(): void {
    this.scrollHandler = () => {
      const el = document.documentElement;
      const top = el.scrollTop;
      const h = el.scrollHeight - el.clientHeight;
      const fill = document.getElementById('sprogfill');
      if (fill) fill.style.width = (h ? (top / h * 100) : 0) + '%';
    };
    window.addEventListener('scroll', this.scrollHandler);
  }

  ngOnDestroy(): void {
    window.removeEventListener('scroll', this.scrollHandler);
  }
}
