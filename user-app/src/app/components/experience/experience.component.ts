import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-experience',
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  template: `
    <section id="experience" class="noise">
      <div class="sec-title">
        <span class="sec-num">04</span>
        <div>
          <span class="glitch" data-t="EXPERIENCIA">EXPERIENCIA</span>
          <div class="sec-line"></div>
        </div>
      </div>
      <div class="timeline">
        <div class="ttrack"></div>
        <div class="titem">
          <div class="tnode cur blink">◆</div>
          <div class="ecard pbox cur">
            <div class="eh">
              <span class="ep">24/03/2025 – 11/04/2025</span>
              <span class="ebadge"><span class="blink">▶</span> PRÁCTICAS FCT</span>
            </div>
            <h3 class="er">DESARROLLADOR DE APLICACIONES WEB</h3>
            <p class="eco"><span>$</span> FuniverS</p>
            <p class="edesc">
              Desarrollo frontend completo del sitio web, incluyendo estructura y diseño de la página principal.
              Implementación de estilos responsivos con Tailwind CSS. Creación y gestión de base de datos con información de productos.
              Integración de la base de datos con el sitio para mostrar contenido dinámico.
              Pruebas de funcionamiento y optimización del rendimiento general.
            </p>
            <div class="etags">
              <span class="etag">HTML</span><span class="etag">CSS</span>
              <span class="etag">Tailwind CSS</span><span class="etag">MySQL</span><span class="etag">PHP</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    #experience { background: var(--bg); }
    .timeline {
      position: relative; padding-left: 56px;
      display: flex; flex-direction: column; gap: 40px;
      max-width: 780px; position: relative; z-index: 1;
    }
    .ttrack {
      position: absolute; left: 18px; top: 0; bottom: 0; width: 1px;
      background: linear-gradient(to bottom, var(--cyan), transparent);
      box-shadow: 0 0 6px rgba(0,255,255,.3);
    }
    .titem { position: relative; }
    .tnode {
      position: absolute; left: -47px; top: 20px;
      width: 20px; height: 20px;
      display: flex; align-items: center; justify-content: center;
      font-size: .9rem; color: var(--cyan); text-shadow: 0 0 8px var(--cyan);
    }
    .tnode.cur { color: var(--green); text-shadow: 0 0 8px var(--green); }
    .ecard {
      background: var(--surface); padding: 24px;
      display: flex; flex-direction: column; gap: 14px;
      transition: transform .2s;
    }
    .ecard:hover { transform: translateX(4px); }
    .ecard.cur { border-color: var(--green); box-shadow: 4px 4px 0 rgba(0,180,65,.4); }
    .eh { display: flex; justify-content: space-between; align-items: center; }
    .ep { font-family: var(--fm); font-size: .68rem; color: var(--muted); }
    .ebadge {
      font-family: var(--fm); font-size: .62rem;
      color: var(--green); text-shadow: 0 0 6px var(--green);
      display: flex; align-items: center; gap: 4px;
    }
    .er { font-family: var(--fp); font-size: .55rem; color: var(--cyan); line-height: 1.7; }
    .eco { font-family: var(--fm); font-size: .83rem; color: var(--muted); }
    .eco span { color: var(--yellow); margin-right: 4px; }
    .edesc { font-family: var(--fm); font-size: .78rem; color: rgba(232,232,232,.6); line-height: 1.7; }
    .etags { display: flex; flex-wrap: wrap; gap: 6px; }
    .etag {
      font-family: var(--fm); font-size: .63rem;
      color: var(--cyan); border: 1px solid rgba(0,255,255,.3);
      padding: 2px 8px; background: rgba(0,255,255,.04);
    }
    @media (max-width: 768px) { .timeline { padding-left: 36px; } }
    @media (max-width: 480px) {
      .timeline { padding-left: 28px; }
      .ecard { padding: 18px; }
      .er { font-size: .48rem; }
    }
  `]
})
export class ExperienceComponent {}
