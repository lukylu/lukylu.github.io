import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionTitleComponent } from '../section-title/section-title.component';

interface Skill { name: string; icon: string; level: number; category: string; }

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, SectionTitleComponent],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  categories = ['FRONTEND', 'BACKEND', 'TOOLS'];
  active = 'FRONTEND';

  skills: Skill[] = [
    // Frontend - ordenado de mayor a menor nivel
    { name: 'HTML',         icon: '🌐', level: 5, category: 'FRONTEND' },
    { name: 'CSS',          icon: '🎨', level: 5, category: 'FRONTEND' },
    { name: 'Tailwind CSS', icon: '💨', level: 4, category: 'FRONTEND' },
    { name: 'JavaScript',   icon: '⚡', level: 3, category: 'FRONTEND' },
    { name: 'TypeScript',   icon: '𝓣',  level: 3, category: 'FRONTEND' },
    { name: 'Angular',      icon: '🅰',  level: 3, category: 'FRONTEND' },
    // Backend - ordenado de mayor a menor nivel
    { name: 'MySQL',        icon: '🗄',  level: 4, category: 'BACKEND' },
    { name: 'SQL',          icon: '📊', level: 4, category: 'BACKEND' },
    { name: 'PHP',          icon: '🐘', level: 2, category: 'BACKEND' },
    { name: 'Java',         icon: '☕', level: 3, category: 'BACKEND' },
    { name: 'Docker',       icon: '🐋', level: 2, category: 'BACKEND' },
    // Tools - ordenado de mayor a menor nivel
    { name: 'VS Code',      icon: '💙', level: 5, category: 'TOOLS' },
    { name: 'Git',          icon: '🌿', level: 3, category: 'TOOLS' },
    { name: 'Linux',        icon: '🐧', level: 2, category: 'TOOLS' },
  ];

  get filtered() {
    return this.skills.filter(s => s.category === this.active);
  }

  getLevelLabel(lvl: number): string {
    return ['', 'NOVATO', 'APRENDIZ', 'CAPAZ', 'HÁBIL', 'EXPERTO'][lvl];
  }

  getLevelColor(lvl: number): string {
    return ['', '#ff00ff', '#ffff00', '#00ffff', '#00ff41', '#ffd700'][lvl];
  }

  getStars(level: number): boolean[] {
    return Array.from({ length: 5 }, (_, i) => i < level);
  }
}
