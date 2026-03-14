import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionTitleComponent } from '../section-title/section-title.component';

export interface EducationItem {
  degree:   string;
  school:   string;
  period:   string;
  grade?:   string;
  tags:     string[];
  current:  boolean;
}

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule, SectionTitleComponent],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent {
  items: EducationItem[] = [
    {
      degree:  'Desarrollo de Aplicaciones Web (FP2)',
      school:  'FuniverS / TuniverS Formación',
      period:  '2024 – Actualmente',
      grade:   'En curso',
      tags:    ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL', 'Java', 'Docker'],
      current: true
    },
    {
      degree:  'Certificado de Inglés B2',
      school:  'Oxford',
      period:  '2025',
      grade:   'B2',
      tags:    ['Inglés B2', 'Certificado oficial'],
      current: false
    },
    {
      degree:  'Bachillerato Científico-Tecnológico',
      school:  'I.E.S Ramón Menéndez Pidal',
      period:  '2022 – 2024',
      tags:    ['Ciencias', 'Tecnología'],
      current: false
    }
  ];
}
