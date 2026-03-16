import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  template: `
    <footer>
      <div class="fline"></div>
      <div class="fcontent">
        <span class="fcopy"><span class="p">C:\&gt;</span>© 2025 LUCAS FDEZ IGLESIAS — JUNIOR DEV</span>
        <span class="fmade">HECHO CON <span class="h">♥</span> Y MUCHO <span class="a">ANGULAR</span></span>
        <span class="fstatus"><span class="blink">●</span> ONLINE</span>
      </div>
    </footer>
  `,
  styles: [`
    footer { background: var(--surface); border-top: 1px solid var(--border); }
    .fline {
      height: 2px;
      background: linear-gradient(90deg, transparent, var(--cyan), var(--magenta), transparent);
      box-shadow: 0 0 8px rgba(0,255,255,.3);
    }
    .fcontent {
      display: flex; justify-content: space-between; align-items: center;
      padding: 20px 64px; flex-wrap: wrap; gap: 14px;
    }
    .fcopy { font-family: var(--fm); font-size: .73rem; color: var(--muted); }
    .fcopy .p { color: var(--green); margin-right: 6px; }
    .fmade { font-family: var(--fm); font-size: .68rem; color: var(--muted); }
    .fmade .h { color: var(--red); }
    .fmade .a { color: var(--red); text-shadow: 0 0 6px var(--red); }
    .fstatus {
      font-family: var(--fm); font-size: .68rem; color: var(--green);
      display: flex; align-items: center; gap: 6px;
    }
    @media (max-width: 768px) {
      .fcontent { padding: 16px 24px; flex-direction: column; text-align: center; gap: 8px; }
    }
    @media (max-width: 480px) {
      .fcopy, .fmade, .fstatus { font-size: .62rem; }
    }
  `]
})
export class FooterComponent {}
