import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  id: string; title: string; desc: string;
  tags: string[]; status: string; statusColor: string;
  feat: boolean; repo?: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [CommonModule],
  template: `
    <section id="projects" class="noise">
      <div class="sec-title">
        <span class="sec-num">07</span>
        <div>
          <span class="glitch" data-t="PROYECTOS">PROYECTOS</span>
          <div class="sec-line"></div>
        </div>
      </div>
      <div class="proj-filters">
        <button class="pfbtn" [class.active]="curFilter==='ALL'" (click)="setFilter('ALL')">ALL</button>
        <button class="pfbtn" [class.active]="curFilter==='SHIPPED'" (click)="setFilter('SHIPPED')">SHIPPED</button>
      </div>
      <div class="proj-grid">
        <article class="pcard pbox" [class.feat]="p.feat" *ngFor="let p of filteredProjects">
          <div class="ptopbar">
            <div class="pdots">
              <div class="pd" style="background:#ff0040"></div>
              <div class="pd" style="background:#ffff00"></div>
              <div class="pd" style="background:#00ff41"></div>
            </div>
            <span class="pfile">project_{{p.id}}.ts</span>
            <span class="pstatus" [style.color]="p.statusColor">{{p.status}}</span>
          </div>
          <div class="pfeatrow" *ngIf="p.feat">
            <span class="featbadge">★ DESTACADO</span>
          </div>
          <div class="pbody">
            <h3 class="ptitle">{{p.title}}</h3>
            <p class="pdesc">{{p.desc}}</p>
            <div class="ptags">
              <span class="ptag" *ngFor="let t of p.tags">{{t}}</span>
            </div>
          </div>
          <div class="pclinks">
            <a class="plbtn out" *ngIf="p.repo" [href]="p.repo" target="_blank">▶ VER DEMO</a>
          </div>
        </article>
      </div>
    </section>
  `,
  styles: [`
    #projects { background: var(--bg-alt); }
    .proj-filters { display: flex; gap: 8px; margin-bottom: 32px; position: relative; z-index: 1; }
    .pfbtn {
      font-family: var(--fp); font-size: .47rem;
      background: none; border: 1px solid var(--border);
      color: var(--muted); cursor: pointer;
      padding: 6px 14px; letter-spacing: .04em; transition: all .2s;
    }
    .pfbtn.active, .pfbtn:hover { color: var(--cyan); border-color: var(--cyan); box-shadow: 0 0 8px rgba(0,255,255,.2); }
    .proj-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(290px, 1fr));
      gap: 20px; position: relative; z-index: 1;
    }
    .pcard {
      background: var(--surface); display: flex; flex-direction: column;
      overflow: hidden; transition: transform .2s; position: relative;
    }
    .pcard:hover { transform: translate(-3px,-3px); }
    .pcard.feat { border-color: var(--yellow); box-shadow: 4px 4px 0 rgba(140,120,0,.5); }
    .ptopbar {
      background: var(--surface2); border-bottom: 1px solid var(--border);
      padding: 8px 16px; display: flex; align-items: center; gap: 8px;
    }
    .pdots { display: flex; gap: 5px; }
    .pd { width: 10px; height: 10px; border-radius: 50%; }
    .pfile { font-family: var(--fm); font-size: .63rem; color: var(--muted); flex: 1; }
    .pstatus { font-family: var(--fm); font-size: .63rem; letter-spacing: .04em; }
    .pbody { padding: 20px; display: flex; flex-direction: column; gap: 14px; flex: 1; }
    .ptitle { font-family: var(--fp); font-size: .55rem; color: var(--cyan); line-height: 1.7; text-shadow: 0 0 6px rgba(0,255,255,.35); }
    .pdesc { font-family: var(--fm); font-size: .78rem; color: rgba(232,232,232,.6); line-height: 1.7; }
    .ptags { display: flex; flex-wrap: wrap; gap: 6px; }
    .ptag {
      font-family: var(--fm); font-size: .63rem;
      color: var(--magenta); border: 1px solid rgba(255,0,255,.3);
      padding: 2px 8px; background: rgba(255,0,255,.04);
    }
    .pclinks { padding: 14px 20px; border-top: 1px solid var(--border); display: flex; gap: 8px; }
    .plbtn {
      font-family: var(--fp); font-size: .47rem;
      padding: 7px 12px; text-decoration: none;
      transition: all .2s; color: var(--bg);
      background: var(--cyan); border: 2px solid var(--cyan);
    }
    .plbtn.out { background: transparent; color: var(--cyan); }
    .plbtn.out:hover { background: var(--cyan); color: var(--bg); }
    .pfeatrow {
      padding: 6px 16px; background: rgba(255,255,0,.06);
      border-bottom: 1px solid rgba(255,255,0,.2);
      display: flex; align-items: center;
    }
    .featbadge {
      font-family: var(--fm); font-size: .6rem;
      color: var(--yellow); text-shadow: 0 0 6px var(--yellow);
      letter-spacing: .06em;
    }
    @media (max-width: 768px) { .proj-grid { grid-template-columns: 1fr; } }
    @media (max-width: 480px) { .ptitle { font-size: .48rem; } .pdesc { font-size: .72rem; } }
  `]
})
export class ProjectsComponent {
  curFilter = 'ALL';

  projects: Project[] = [
    {
      id: '01', title: 'SITIO WEB FUNIVERSS',
      desc: 'Desarrollo frontend completo durante las prácticas FCT. Página principal con diseño responsivo usando Tailwind CSS, base de datos de productos integrada dinámicamente.',
      tags: ['HTML','CSS','Tailwind CSS','PHP','MySQL'],
      status: 'SHIPPED', statusColor: '#00ff41', feat: true
    },
    {
      id: '02', title: 'PORTFOLIO PERSONAL',
      desc: 'Portfolio de presentación profesional desarrollado con Angular 21. Estética retro/glitch años 90 con animaciones CSS y componentes standalone.',
      tags: ['Angular','TypeScript','CSS'],
      status: 'SHIPPED', statusColor: '#00ff41', feat: false
    },
    {
      id: '03', title: 'PROYECTO DAW',
      desc: 'Aplicación web completa desarrollada durante el ciclo formativo de DAW. CRUD con PHP y MySQL, lógica de negocio en Java.',
      tags: ['PHP','MySQL','Java','HTML','CSS'],
      status: 'SHIPPED', statusColor: '#00ff41', feat: false
    },
    {
      id: '04', title: 'IRONCORE GYM',
      desc: 'Aplicación web fullstack que simula la experiencia completa de un gimnasio real. Registro e inicio de sesión con autenticación persistida en base de datos, obligatoria para reservar clases y pistas de pádel, cancelar reservas, comprar membresías y hacerse socio. Panel personal con historial de gasto, reservas activas e información del equipamiento. Modo administrador protegido por clave secreta con acceso a la base de datos completa — usuarios registrados con contraseñas hasheadas — y exportación en JSON. Desplegada en Vercel.',
      tags: ['Angular','TypeScript','CSS','MySQL','Auth','Admin Panel','Vercel'],
      status: 'SHIPPED', statusColor: '#00ff41', feat: true,
      repo: 'https://gimnasio-app-psi.vercel.app/'
    }
  ];

  get filteredProjects(): Project[] {
    return this.projects.filter(p => this.curFilter === 'ALL' || p.status === this.curFilter);
  }
  setFilter(f: string): void { this.curFilter = f; }
}
