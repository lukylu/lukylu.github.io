import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-education',
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  template: `
    <section id="education" class="noise">
      <div class="sec-title">
        <span class="sec-num">03</span>
        <div>
          <span class="glitch" data-t="ESTUDIOS">ESTUDIOS</span>
          <div class="sec-line"></div>
        </div>
      </div>
      <div class="edu-grid">

        <div class="edu-card pbox cur">
          <div class="ch">
            <span class="ci">01</span>
            <div style="display:flex;align-items:center;gap:10px">
              <span class="cper">2024 – Actualmente</span>
              <span class="cbadge"><span class="blink">●</span> EN CURSO</span>
            </div>
          </div>
          <h3 class="cdeg">DESARROLLO DE APLICACIONES WEB (FP2)</h3>
          <p class="csch"><span>@</span> FuniverS / TuniverS Formación</p>
          <div class="ctags">
            <span class="tag">HTML</span><span class="tag">CSS</span>
            <span class="tag">JavaScript</span><span class="tag">PHP</span>
            <span class="tag">MySQL</span><span class="tag">Java</span><span class="tag">Docker</span>
          </div>
          <div class="cgrade"><span class="gl">NOTA:</span><span class="gv">En curso</span></div>
        </div>

        <div class="edu-card pbox">
          <div class="ch">
            <span class="ci">02</span>
            <span class="cper">2025</span>
          </div>
          <h3 class="cdeg">CERTIFICADO DE INGLÉS B2</h3>
          <p class="csch"><span>@</span> Oxford</p>
          <div class="ctags">
            <span class="tag">Inglés B2</span><span class="tag">Certificado oficial</span>
          </div>
          <div class="cgrade"><span class="gl">NIVEL:</span><span class="gv">B2</span></div>
        </div>

        <div class="edu-card pbox">
          <div class="ch">
            <span class="ci">03</span>
            <span class="cper">2022 – 2024</span>
          </div>
          <h3 class="cdeg">BACHILLERATO CIENTÍFICO-TECNOLÓGICO</h3>
          <p class="csch"><span>@</span> I.E.S Ramón Menéndez Pidal</p>
          <div class="ctags">
            <span class="tag">Ciencias</span><span class="tag">Tecnología</span>
          </div>
        </div>

        <div class="edu-card pbox">
          <div class="ch">
            <span class="ci">04</span>
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
    #education { background: var(--bg-alt); }
    .edu-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px; position: relative; z-index: 1; }
    .edu-card {
      background: var(--surface); padding: 24px;
      display: flex; flex-direction: column; gap: 14px;
      transition: transform .2s;
    }
    .edu-card:hover { transform: translate(-3px,-3px); }
    .edu-card.cur { border-color: var(--green); box-shadow: 4px 4px 0 rgba(0,180,65,.4); }
    .ch { display: flex; justify-content: space-between; align-items: flex-start; }
    .ci { font-family: var(--fp); font-size: .45rem; color: var(--magenta); opacity: .6; }
    .cper { font-family: var(--fm); font-size: .68rem; color: var(--muted); }
    .cbadge {
      font-family: var(--fm); font-size: .62rem;
      color: var(--green); text-shadow: 0 0 6px var(--green);
      display: flex; align-items: center; gap: 4px;
    }
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

    @media (max-width: 768px) { .edu-grid { grid-template-columns: 1fr; } }
    @media (max-width: 480px) { .edu-card { padding: 18px; } .cdeg { font-size: .48rem; } }
  `]
})
export class EducationComponent {}
