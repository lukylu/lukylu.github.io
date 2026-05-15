import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-certificates',
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  template: `
    <section id="certificates" class="noise">
      <div class="sec-title">
        <span class="sec-num">02</span>
        <div>
          <span class="glitch" data-t="CERTIFICADOS">CERTIFICADOS</span>
          <div class="sec-line"></div>
        </div>
      </div>
      <div class="cert-grid">

        <div class="cert-card pbox">
          <div class="ch">
            <span class="ci">01</span>
            <span class="cper">13/03/2026</span>
          </div>
          <h3 class="cdeg">INICIACIÓN AL DESARROLLO CON IA</h3>
          <p class="csch"><span>@</span> BIG school</p>
          <div class="ctags">
            <span class="tag">IA</span>
            <span class="tag">Agentes</span>
            <span class="tag">Ciberseguridad</span>
            <span class="tag">Prompting</span>
          </div>
          <div class="cgrade"><span class="gl">CERT:</span><span class="gv">Desarrollo con IA: de 0 a Producción</span></div>
        </div>

      </div>
    </section>
  `,
  styles: [`
    #certificates { background: var(--bg); }
    .cert-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px; position: relative; z-index: 1; }
    .cert-card {
      background: var(--surface); padding: 24px;
      display: flex; flex-direction: column; gap: 14px;
      transition: transform .2s;
    }
    .cert-card:hover { transform: translate(-3px,-3px); }
    .ch { display: flex; justify-content: space-between; align-items: flex-start; }
    .ci { font-family: var(--fp); font-size: .45rem; color: var(--magenta); opacity: .6; }
    .cper { font-family: var(--fm); font-size: .68rem; color: var(--muted); }
    .cdeg { font-family: var(--fp); font-size: .55rem; color: var(--cyan); line-height: 1.7; text-shadow: 0 0 6px rgba(0,255,255,.35); }
    .csch { font-family: var(--fm); font-size: .83rem; color: var(--muted); }
    .csch span { color: var(--yellow); margin-right: 4px; }
    .ctags { display: flex; flex-wrap: wrap; gap: 6px; }
    .tag {
      font-family: var(--fm); font-size: .63rem;
      color: var(--green); border: 1px solid rgba(0,255,65,.3);
      padding: 2px 8px; background: rgba(0,255,65,.04);
    }
    .cgrade { font-family: var(--fm); font-size: .78rem; display: flex; align-items: center; gap: 8px; }
    .cgrade .gl { color: var(--muted); }
    .cgrade .gv { color: var(--yellow); text-shadow: 0 0 6px rgba(255,255,0,.4); }

    @media (max-width: 768px) { .cert-grid { grid-template-columns: 1fr; } }
    @media (max-width: 480px) { .cert-card { padding: 18px; } .cdeg { font-size: .48rem; } }
  `]
})
export class CertificatesComponent {}
