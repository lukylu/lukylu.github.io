import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionTitleComponent } from '../section-title/section-title.component';

export interface Project {
  id:       number;
  title:    string;
  desc:     string;
  tags:     string[];
  url?:     string;
  repo?:    string;
  status:   'SHIPPED' | 'WIP' | 'CONCEPT';
  featured: boolean;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, SectionTitleComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  filter = 'ALL';
  filters = ['ALL', 'SHIPPED'];

  projects: Project[] = [
    {
      id: 1,
      title:    'SITIO WEB FUNIVERS',
      desc:     'Desarrollo frontend completo durante las prácticas FCT. Página principal con diseño responsivo usando Tailwind CSS, base de datos de productos integrada dinámicamente.',
      tags:     ['HTML', 'CSS', 'Tailwind CSS', 'PHP', 'MySQL'],
      status:   'SHIPPED',
      featured: true
    },
    {
      id: 2,
      title:    'PORTFOLIO PERSONAL',
      desc:     'Portfolio de presentación profesional desarrollado con Angular 21. Estética retro/glitch años 90 con animaciones CSS y componentes standalone.',
      tags:     ['Angular', 'TypeScript', 'SCSS'],
      status:   'SHIPPED',
      featured: false
    },
    {
      id: 3,
      title:    'PROYECTO DAW',
      desc:     'Aplicación web completa desarrollada durante el ciclo formativo de DAW. CRUD con PHP y MySQL, lógica de negocio en Java.',
      tags:     ['PHP', 'MySQL', 'Java', 'HTML', 'CSS'],
      status:   'SHIPPED',
      featured: false
    }
  ];

  get filtered() {
    return this.filter === 'ALL'
      ? this.projects
      : this.projects.filter(p => p.status === this.filter);
  }

  getStatusColor(status: string) {
    return { SHIPPED: '#00ff41', WIP: '#ffff00', CONCEPT: '#ff00ff' }[status] ?? '#fff';
  }
}
