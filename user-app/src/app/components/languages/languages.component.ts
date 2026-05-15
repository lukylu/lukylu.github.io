import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-languages',
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [CommonModule],
  template: `
    <section id="languages" class="noise">
      <div class="sec-title">
        <span class="sec-num">06</span>
        <div>
          <span class="glitch" data-t="IDIOMAS">IDIOMAS</span>
          <div class="sec-line"></div>
        </div>
      </div>
      <div class="lang-grid">

        <div class="lcard pbox">
          <div class="lh">
            <span class="lflag">🇪🇸</span>
            <div>
              <p class="lname">ESPAÑOL</p>
              <span class="llvl" style="color:var(--green)">Nativo</span>
            </div>
          </div>
          <div class="lblocks">
            <div class="lb" *ngFor="let b of spanishBlocks" [style.background]="b ? '#00ff41' : 'transparent'" [style.box-shadow]="b ? '0 0 4px #00ff41' : 'none'"></div>
          </div>
          <span class="lpct">100%</span>
        </div>

        <div class="lcard pbox">
          <div class="lh">
            <span class="lflag">🇬🇧</span>
            <div>
              <p class="lname">INGLÉS</p>
              <span class="llvl" style="color:var(--cyan)">B2</span>
            </div>
            <span class="lcert">Oxford 2025</span>
          </div>
          <div class="lblocks">
            <div class="lb" *ngFor="let b of englishBlocks" [style.background]="b ? '#00ffff' : 'transparent'" [style.box-shadow]="b ? '0 0 4px #00ffff' : 'none'"></div>
          </div>
          <span class="lpct">72%</span>
        </div>

      </div>
    </section>
  `,
  styles: [`
    #languages { background: var(--bg); }
    .lang-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
      gap: 20px; max-width: 680px;
      position: relative; z-index: 1;
    }
    .lcard {
      background: var(--surface); padding: 24px;
      display: flex; flex-direction: column; gap: 14px;
      transition: transform .2s;
    }
    .lcard:hover { transform: translate(-3px,-3px); }
    .lh { display: flex; align-items: center; gap: 16px; }
    .lflag { font-size: 2.2rem; line-height: 1; display: inline-block; font-family: "Apple Color Emoji","Segoe UI Emoji","Noto Color Emoji",sans-serif; }
    .lname { font-family: var(--fp); font-size: .55rem; color: var(--white); margin-bottom: 4px; }
    .llvl { font-family: var(--fm); font-size: .82rem; font-weight: bold; }
    .lcert { margin-left: auto; font-family: var(--fm); font-size: .62rem; color: var(--muted); border: 1px solid var(--border); padding: 2px 8px; }
    .lblocks { display: flex; gap: 4px; }
    .lb {
      width: 20px; height: 20px;
      border: 1px solid rgba(255,255,255,.15);
      image-rendering: pixelated;
      transition: background .3s;
    }
    .lpct { font-family: var(--fm); font-size: .68rem; color: var(--muted); }
    @media (max-width: 768px) { .lang-grid { grid-template-columns: 1fr; } }
  `]
})
export class LanguagesComponent implements OnInit {
  spanishBlocks: boolean[] = [];
  englishBlocks: boolean[] = [];

  ngOnInit(): void {
    this.spanishBlocks = Array(10).fill(0).map((_, i) => i < 10);
    this.englishBlocks = Array(10).fill(0).map((_, i) => i < Math.round(72 / 100 * 10));
  }
}
