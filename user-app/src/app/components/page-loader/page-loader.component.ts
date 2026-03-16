import { Component, OnInit, Output, EventEmitter, ChangeDetectorRef, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-page-loader',
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [CommonModule],
  template: `
    <div id="loader" [class.hide]="hidden">
      <div class="bios-box">
        <div id="blines">
          <p class="bline">PORTFOLIO BIOS v1.0 — 2025</p>
          <p class="bline">CPU: JUNIOR DEV @ 100MHz</p>
          <p class="bline">RAM: 640KB IDEAS...<span style="color:var(--cyan)"> OK</span></p>
          <p class="bline" *ngFor="let l of bootLines">
            <span class="ok">[OK]</span> {{l}}
          </p>
        </div>
        <p class="bline bl">LOADING PORTFOLIO<span>{{dots}}</span></p>
        <div class="prog-bar"><div class="prog-fill" [style.width]="prog + '%'"></div></div>
        <p class="prog-lbl">{{prog | number:'1.0-0'}}%</p>
      </div>
    </div>
  `,
  styles: [`
    #loader {
      position: fixed; inset: 0;
      background: var(--bg); z-index: 8000;
      display: flex; align-items: center; justify-content: center;
      transition: opacity .6s, visibility .6s;
    }
    #loader.hide { opacity: 0; visibility: hidden; pointer-events: none; }
    .bios-box {
      width: min(580px, 90vw);
      border: 2px solid var(--green);
      padding: 32px;
      box-shadow: 0 0 40px rgba(0,255,65,.2);
      position: relative;
    }
    .bios-box::before {
      content: '■ PORTFOLIO.EXE';
      position: absolute; top: -12px; left: 16px;
      background: var(--bg); padding: 0 8px;
      font-family: var(--fp); font-size: .5rem;
      color: var(--green);
    }
    .bios-box::after {
      content: '';
      position: absolute; inset: 0;
      background: repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,.1) 2px, rgba(0,0,0,.1) 4px);
      pointer-events: none;
    }
    .bline {
      font-family: var(--fr); font-size: 1.3rem;
      color: var(--green); line-height: 1.9;
      text-shadow: 0 0 6px rgba(0,255,65,.6);
    }
    .bline .ok { color: var(--cyan); margin-right: 8px; }
    .bl { animation: blink .7s step-end infinite; }
    .prog-bar {
      margin-top: 20px; height: 7px;
      border: 1px solid var(--green);
      background: var(--surface2); overflow: hidden;
    }
    .prog-fill {
      height: 100%;
      background: var(--green);
      box-shadow: 0 0 8px var(--green);
      width: 0%;
      transition: width .08s linear;
    }
    .prog-lbl {
      font-family: var(--fm); font-size: .65rem;
      color: var(--green); text-align: right;
      margin-top: 3px; opacity: .7;
    }
    @media (max-width: 480px) {
      .bios-box { padding: 20px; }
      .bline { font-size: 1.1rem; }
    }
  `]
})
export class PageLoaderComponent implements OnInit {
  @Output() loaded = new EventEmitter<void>();

  prog = 0;
  dots = '';
  hidden = false;
  bootLines: string[] = [];

  private skillsBoot: [string, number][] = [
    ['HTML/CSS', 25], ['TypeScript', 50], ['Angular', 70], ['Git', 90]
  ];

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    const di = setInterval(() => {
      this.dots = this.dots.length < 3 ? this.dots + '.' : '';
      this.cdr.detectChanges();
    }, 300);

    const pi = setInterval(() => {
      this.prog += 2.5;
      if (this.prog > 100) this.prog = 100;
      this.skillsBoot.forEach(([s, t]) => {
        if (Math.round(this.prog) === t && !this.bootLines.includes(s)) {
          this.bootLines.push(s);
        }
      });
      this.cdr.detectChanges();
      if (this.prog >= 100) {
        clearInterval(pi); clearInterval(di);
        setTimeout(() => {
          this.hidden = true;
          this.cdr.detectChanges();
          this.loaded.emit();
        }, 400);
      }
    }, 70);
  }
}
