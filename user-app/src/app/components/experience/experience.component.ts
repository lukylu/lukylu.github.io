import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionTitleComponent } from '../section-title/section-title.component';

interface ExperienceItem {
  role:     string;
  company:  string;
  period:   string;
  desc:     string;
  tags:     string[];
  current:  boolean;
}

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, SectionTitleComponent],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {
  items: ExperienceItem[] = [
    {
      role:    'Desarrollador de Aplicaciones Web',
      company: 'FuniverS',
      period:  '24/03/2025 – 11/04/2025',
      desc:    'Desarrollo frontend completo del sitio web, incluyendo la estructura y diseño de la página principal. Implementación de estilos responsivos con Tailwind CSS para asegurar una buena visualización en distintos dispositivos. Creación y gestión de una base de datos con la información de todos los productos. Integración de la base de datos con el sitio web para mostrar contenido dinámico. Pruebas de funcionamiento y optimización del rendimiento general del sitio.',
      tags:    ['HTML', 'CSS', 'Tailwind CSS', 'PHP', 'MySQL'],
      current: true
    }
  ];
}
