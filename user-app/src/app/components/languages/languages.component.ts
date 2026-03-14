import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionTitleComponent } from '../section-title/section-title.component';

interface Language {
  name:  string;
  level: string;
  pct:   number;
  flag:  string;
  cert?: string;
}

@Component({
  selector: 'app-languages',
  standalone: true,
  imports: [CommonModule, SectionTitleComponent],
  templateUrl: './languages.component.html',
  styleUrl: './languages.component.css'
})
export class LanguagesComponent {
  langs: Language[] = [
    { name: 'Español', level: 'Nativo', pct: 100, flag: '🇪🇸' },
    { name: 'Inglés',  level: 'B2',     pct: 72,  flag: '🇬🇧', cert: 'Oxford 2025' },
  ];

  getLevelColor(pct: number): string {
    if (pct >= 90) return '#00ff41';
    if (pct >= 60) return '#00ffff';
    if (pct >= 40) return '#ffff00';
    return '#ff00ff';
  }

  getBlocks(pct: number): boolean[] {
    const total = 10;
    const filled = Math.round((pct / 100) * total);
    return Array.from({ length: total }, (_, i) => i < filled);
  }
}
