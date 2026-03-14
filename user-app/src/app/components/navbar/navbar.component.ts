import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollService } from '../../services/scroll.service';

interface NavItem { label: string; target: string; }

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  isScrolled    = false;
  menuOpen      = false;
  activeSection = 'hero';

  navItems: NavItem[] = [
    { label: '// INICIO',      target: 'hero'       },
    { label: '// ESTUDIOS',    target: 'education'  },
    { label: '// EXPERIENCIA', target: 'experience' },
    { label: '// IDIOMAS',     target: 'languages'  },
    { label: '// SKILLS',      target: 'skills'     },
    { label: '// PROYECTOS',   target: 'projects'   },
    { label: '// CONTACTO',    target: 'contact'    },
  ];

  constructor(private scrollService: ScrollService) {}

  ngOnInit() {
    this.scrollService.activeSection$.subscribe(
      section => this.activeSection = section
    );
  }

  @HostListener('window:scroll')
  onScroll() {
    this.isScrolled = window.scrollY > 60;
  }

  scrollTo(target: string) {
    const el = document.getElementById(target);
    el?.scrollIntoView({ behavior: 'smooth' });
    this.menuOpen = false;
  }

  toggleMenu() { this.menuOpen = !this.menuOpen; }
}
