import { Component, OnInit, OnDestroy, HostListener, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollService } from '../../services/scroll.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [CommonModule],
  template: `
    <nav id="navbar" [class.scrolled]="scrolled">
      <div class="logo" (click)="scroll('hero')">
        <span class="p">C:\\&gt;</span>
        <span class="n">LUCAS_FI</span>
        <span class="c blink">_</span>
      </div>
      <ul class="nav-links">
        <li><a href="#" (click)="scroll('hero');$event.preventDefault()" [class.active]="active==='hero'" data-s="hero">// INICIO</a></li>
        <li><a href="#" (click)="scroll('education');$event.preventDefault()" [class.active]="active==='education'" data-s="education">// ESTUDIOS</a></li>
        <li><a href="#" (click)="scroll('certificates');$event.preventDefault()" [class.active]="active==='certificates'" data-s="certificates">// CERTIFICADOS</a></li>
        <li><a href="#" (click)="scroll('experience');$event.preventDefault()" [class.active]="active==='experience'" data-s="experience">// EXPERIENCIA</a></li>
        <li><a href="#" (click)="scroll('languages');$event.preventDefault()" [class.active]="active==='languages'" data-s="languages">// IDIOMAS</a></li>
        <li><a href="#" (click)="scroll('skills');$event.preventDefault()" [class.active]="active==='skills'" data-s="skills">// SKILLS</a></li>
        <li><a href="#" (click)="scroll('projects');$event.preventDefault()" [class.active]="active==='projects'" data-s="projects">// PROYECTOS</a></li>
        <li><a href="#" (click)="scroll('contact');$event.preventDefault()" [class.active]="active==='contact'" data-s="contact">// CONTACTO</a></li>
      </ul>
      <button class="hamburger" [class.open]="menuOpen" (click)="toggleMenu()">
        <span></span><span></span><span></span>
      </button>
    </nav>

    <div class="mobile-menu" [class.open]="menuOpen">
      <ul>
        <li><a href="#" (click)="scrollMobile('hero');$event.preventDefault()">// INICIO</a></li>
        <li><a href="#" (click)="scrollMobile('education');$event.preventDefault()">// ESTUDIOS</a></li>
        <li><a href="#" (click)="scrollMobile('certificates');$event.preventDefault()">// CERTIFICADOS</a></li>
        <li><a href="#" (click)="scrollMobile('experience');$event.preventDefault()">// EXPERIENCIA</a></li>
        <li><a href="#" (click)="scrollMobile('languages');$event.preventDefault()">// IDIOMAS</a></li>
        <li><a href="#" (click)="scrollMobile('skills');$event.preventDefault()">// SKILLS</a></li>
        <li><a href="#" (click)="scrollMobile('projects');$event.preventDefault()">// PROYECTOS</a></li>
        <li><a href="#" (click)="scrollMobile('contact');$event.preventDefault()">// CONTACTO</a></li>
      </ul>
    </div>
  `,
  styles: [`
    nav {
      position: fixed; top: 0; left: 0; right: 0; z-index: 6000;
      display: flex; align-items: center; justify-content: space-between;
      padding: 18px 48px;
      background: rgba(10,10,15,.97);
      border-bottom: 1px solid transparent;
      transition: border-color .3s, box-shadow .3s, backdrop-filter .3s;
    }
    nav.scrolled {
      backdrop-filter: blur(8px);
      border-bottom-color: var(--border);
      box-shadow: 0 0 20px rgba(0,255,255,.06);
    }
    .logo {
      font-family: var(--fp); font-size: .6rem;
      cursor: pointer; display: flex; align-items: center; gap: 4px;
    }
    .logo .p { color: var(--green); }
    .logo .n { color: var(--cyan); text-shadow: 0 0 8px var(--cyan); }
    .logo .c { color: var(--white); }
    .nav-links { display: flex; gap: 28px; list-style: none; }
    .nav-links a {
      font-family: var(--fm); font-size: .72rem;
      color: var(--muted); letter-spacing: .04em;
      position: relative; padding-bottom: 2px;
      transition: color .2s;
    }
    .nav-links a::after {
      content: ''; position: absolute;
      bottom: 0; left: 0; right: 0; height: 1px;
      background: var(--cyan);
      transform: scaleX(0); transition: transform .2s;
      box-shadow: 0 0 4px var(--cyan);
    }
    .nav-links a:hover, .nav-links a.active { color: var(--cyan); }
    .nav-links a:hover::after, .nav-links a.active::after { transform: scaleX(1); }
    .hamburger {
      display: none; flex-direction: column; gap: 5px;
      background: none; border: none; cursor: pointer;
      padding: 4px; z-index: 6100;
    }
    .hamburger span {
      display: block; width: 24px; height: 2px;
      background: var(--cyan); box-shadow: 0 0 4px var(--cyan);
      transition: all .3s;
    }
    .hamburger.open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
    .hamburger.open span:nth-child(2) { opacity: 0; }
    .hamburger.open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }
    .mobile-menu {
      display: none; position: fixed; inset: 0;
      background: #0a0a0f;
      border-left: 3px solid var(--cyan);
      z-index: 6050;
      flex-direction: column; align-items: center; justify-content: center;
      opacity: 0; pointer-events: none;
      transition: opacity .25s ease;
    }
    .mobile-menu.open { opacity: 1; pointer-events: all; }
    .mobile-menu ul { list-style: none; display: flex; flex-direction: column; align-items: center; gap: 8px; width: 100%; }
    .mobile-menu li { width: 100%; border-bottom: 1px solid rgba(0,255,255,.08); }
    .mobile-menu a {
      font-family: var(--fp); font-size: .6rem;
      color: var(--muted); letter-spacing: .06em;
      padding: 18px 48px; display: block;
      transition: color .2s, background .2s; text-align: left;
    }
    .mobile-menu a:hover { color: var(--cyan); text-shadow: 0 0 10px var(--cyan); }
    @media (max-width: 768px) {
      .nav-links { display: none; }
      .hamburger { display: flex; }
      .mobile-menu { display: flex; }
      nav { padding: 14px 24px; }
    }
  `]
})
export class NavbarComponent implements OnInit, OnDestroy {
  scrolled = false;
  active = 'hero';
  menuOpen = false;
  private scrollHandler!: () => void;

  constructor(private scrollService: ScrollService) {}

  ngOnInit(): void {
    this.scrollHandler = () => {
      this.scrolled = window.scrollY > 60;
      const secs = ['hero','education','certificates','experience','languages','skills','projects','contact'];
      const vh = window.innerHeight;
      let bestId = 'hero';
      let bestVisible = -1;
      secs.forEach(id => {
        const el = document.getElementById(id);
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const visibleTop = Math.max(rect.top, 0);
        const visibleBottom = Math.min(rect.bottom, vh);
        const visible = Math.max(0, visibleBottom - visibleTop);
        if (visible > bestVisible) { bestVisible = visible; bestId = id; }
      });
      this.active = bestId;
    };
    window.addEventListener('scroll', this.scrollHandler);
  }

  ngOnDestroy(): void {
    window.removeEventListener('scroll', this.scrollHandler);
  }

  scroll(id: string): void { this.scrollService.scrollTo(id); }
  toggleMenu(): void { this.menuOpen = !this.menuOpen; }
  scrollMobile(id: string): void {
    this.menuOpen = false;
    this.scrollService.scrollTo(id);
  }
}
