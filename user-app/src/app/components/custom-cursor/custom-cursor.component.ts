import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-custom-cursor',
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  template: `
    <div id="cur"></div>
    <div id="cur2"></div>
    <div id="cur3"></div>
  `,
  styles: [`
    #cur {
      position: fixed; top: 0; left: 0; z-index: 9999;
      width: 10px; height: 10px;
      background: var(--cyan); border-radius: 50%;
      pointer-events: none;
      box-shadow: 0 0 8px var(--cyan);
      mix-blend-mode: difference;
      transition: width .1s, height .1s, background .1s;
    }
    #cur2 {
      position: fixed; top: 0; left: 0; z-index: 9998;
      width: 32px; height: 32px;
      border: 1px solid rgba(0,255,255,.5);
      pointer-events: none;
      transform: rotate(45deg);
    }
    #cur3 {
      position: fixed; top: 0; left: 0; z-index: 9997;
      width: 56px; height: 56px;
      border: 1px solid rgba(255,0,255,.15);
      border-radius: 50%;
      pointer-events: none;
    }
    @media (hover: none), (max-width: 768px) {
      #cur, #cur2, #cur3 { display: none !important; }
    }
  `]
})
export class CustomCursorComponent implements OnInit, OnDestroy {
  private mx = 0; private my = 0;
  private r2x = 0; private r2y = 0;
  private r3x = 0; private r3y = 0;
  private rafId = 0;
  private mouseMoveHandler!: (e: MouseEvent) => void;
  private enterHandler!: () => void;
  private leaveHandler!: () => void;

  ngOnInit(): void {
    const c = document.getElementById('cur')!;
    const c2 = document.getElementById('cur2')!;
    const c3 = document.getElementById('cur3')!;

    this.mouseMoveHandler = (e: MouseEvent) => {
      this.mx = e.clientX; this.my = e.clientY;
      c.style.transform = `translate(${this.mx - 5}px,${this.my - 5}px)`;
    };
    document.addEventListener('mousemove', this.mouseMoveHandler);

    const loop = () => {
      this.r2x += (this.mx - this.r2x) * .13;
      this.r2y += (this.my - this.r2y) * .13;
      this.r3x += (this.mx - this.r3x) * .07;
      this.r3y += (this.my - this.r3y) * .07;
      c2.style.transform = `translate(${this.r2x - 16}px,${this.r2y - 16}px) rotate(45deg)`;
      c3.style.transform = `translate(${this.r3x - 28}px,${this.r3y - 28}px)`;
      this.rafId = requestAnimationFrame(loop);
    };
    loop();

    this.enterHandler = () => {
      c.style.width = '14px'; c.style.height = '14px';
      c.style.background = 'var(--magenta)';
    };
    this.leaveHandler = () => {
      c.style.width = '10px'; c.style.height = '10px';
      c.style.background = 'var(--cyan)';
    };
    document.querySelectorAll('a,button,input,textarea').forEach(el => {
      el.addEventListener('mouseenter', this.enterHandler);
      el.addEventListener('mouseleave', this.leaveHandler);
    });
  }

  ngOnDestroy(): void {
    document.removeEventListener('mousemove', this.mouseMoveHandler);
    cancelAnimationFrame(this.rafId);
  }
}
