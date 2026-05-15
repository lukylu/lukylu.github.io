import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Skill { n: string; ic: string; l: number; }

@Component({
  selector: 'app-skills',
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [CommonModule],
  template: `
    <section id="skills" class="noise">
      <div class="sec-title">
        <span class="sec-num">05</span>
        <div>
          <span class="glitch" data-t="SKILLS">SKILLS</span>
          <div class="sec-line"></div>
        </div>
      </div>
      <div class="skill-tabs">
        <button class="stab" [class.active]="activeTab==='FRONTEND'" (click)="setTab('FRONTEND')">FRONTEND</button>
        <button class="stab" [class.active]="activeTab==='BACKEND'" (click)="setTab('BACKEND')">BACKEND</button>
        <button class="stab" [class.active]="activeTab==='TOOLS'" (click)="setTab('TOOLS')">TOOLS</button>
      </div>
      <div class="skill-grid">
        <div class="skcard pbox" *ngFor="let s of currentSkills">
          <div class="skicon">{{s.ic}}</div>
          <div class="skinfo">
            <span class="skname">{{s.n}}</span>
            <div class="skstars">
              <span *ngFor="let star of getStars(s.l); let i = index"
                    [style.color]="i < s.l ? lvlColors[s.l] : 'rgba(232,232,232,.2)'">★</span>
            </div>
            <span class="sklvl" [style.color]="lvlColors[s.l]">{{lvlLabels[s.l]}}</span>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    #skills { background: var(--bg-alt); }
    .skill-tabs {
      display: flex; gap: 8px; margin-bottom: 32px;
      border-bottom: 1px solid var(--border); padding-bottom: 16px;
      position: relative; z-index: 1;
    }
    .stab {
      font-family: var(--fp); font-size: .47rem;
      color: var(--muted); background: none;
      border: 1px solid transparent;
      cursor: pointer; padding: 7px 14px;
      letter-spacing: .04em; transition: all .2s;
    }
    .stab.active, .stab:hover {
      color: var(--cyan); border-color: rgba(0,255,255,.3);
      background: rgba(0,255,255,.06);
      box-shadow: 0 0 10px rgba(0,255,255,.08);
    }
    .skill-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
      gap: 14px; position: relative; z-index: 1;
    }
    .skcard {
      background: var(--surface); padding: 16px;
      display: flex; align-items: center; gap: 14px;
      transition: transform .2s; cursor: default;
    }
    .skcard:hover { transform: translate(-2px,-2px); }
    .skicon { font-size: 1.4rem; }
    .skinfo { display: flex; flex-direction: column; gap: 4px; }
    .skname { font-family: var(--fp); font-size: .47rem; color: var(--white); line-height: 1.7; }
    .skstars { display: flex; gap: 2px; font-size: .85rem; }
    .sklvl { font-family: var(--fm); font-size: .58rem; opacity: .8; }

    @media (max-width: 768px) {
      .skill-grid { grid-template-columns: repeat(auto-fill, minmax(130px, 1fr)); }
      .skill-tabs { flex-wrap: wrap; gap: 6px; }
    }
    @media (max-width: 480px) {
      .skill-grid { grid-template-columns: repeat(auto-fill, minmax(110px, 1fr)); gap: 10px; }
      .skcard { padding: 12px; gap: 10px; }
      .skname { font-size: .42rem; }
    }
  `]
})
export class SkillsComponent {
  activeTab: 'FRONTEND' | 'BACKEND' | 'TOOLS' = 'FRONTEND';
  lvlColors = ['', '#ff00ff', '#ffff00', '#00ffff', '#00ff41', '#ffd700'];
  lvlLabels = ['', 'NOVATO', 'APRENDIZ', 'CAPAZ', 'HÁBIL', 'EXPERTO'];

  allSkills: Record<string, Skill[]> = {
    FRONTEND: [
      { n: 'HTML', ic: '🌐', l: 5 }, { n: 'CSS', ic: '🎨', l: 5 }, { n: 'SCSS', ic: '💎', l: 4 },
      { n: 'Angular', ic: '🅰', l: 4 }, { n: 'Tailwind CSS', ic: '💨', l: 4 },
      { n: 'JavaScript', ic: '⚡', l: 3 }, { n: 'TypeScript', ic: '𝓣', l: 3 }
    ],
    BACKEND: [
      { n: 'SQL', ic: '📊', l: 4 }, { n: 'MySQL', ic: '🗄', l: 4 }, { n: 'SQLite', ic: '🗃️', l: 4 },
      { n: 'MongoDB', ic: '🍃', l: 3 }, { n: 'Java', ic: '☕', l: 3 }, { n: 'Docker', ic: '🐋', l: 2 },
      { n: 'PHP', ic: '🐘', l: 2 }
    ],
    TOOLS: [
      { n: 'VS Code', ic: '💙', l: 5 }, { n: 'Vite', ic: '⚡', l: 4 }, { n: 'Git', ic: '🌿', l: 3 },
      { n: 'Render', ic: '☁️', l: 3 }, { n: 'Linux', ic: '🐧', l: 2 }
    ]
  };

  get currentSkills(): Skill[] { return this.allSkills[this.activeTab]; }
  setTab(tab: 'FRONTEND' | 'BACKEND' | 'TOOLS'): void { this.activeTab = tab; }
  getStars(l: number): number[] { return Array(5).fill(0); }
}
