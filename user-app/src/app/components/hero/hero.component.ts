import { Component, OnInit, OnDestroy, NgZone } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlitchTextComponent } from '../glitch-text/glitch-text.component';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, GlitchTextComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent implements OnInit, OnDestroy {
  typedText  = '';
  roles = ['DESARROLLADOR WEB', 'ESTUDIANTE DAW', 'FRONTEND DEVELOPER', 'DISPONIBLE AHORA'];
  currentRole = 0;

  private rafId: number | null = null;
  private lastTime = 0;
  private charIndex = 0;
  private deleting = false;
  private waiting = false;
  private waitUntil = 0;
  private speed = 80;

  constructor(private zone: NgZone) {}

  ngOnInit() {
    // Run outside Angular zone so change detection doesn't interfere
    this.zone.runOutsideAngular(() => {
      this.rafId = requestAnimationFrame((t) => this.tick(t));
    });
  }

  ngOnDestroy() {
    if (this.rafId) cancelAnimationFrame(this.rafId);
  }

  private tick(timestamp: number) {
    if (timestamp - this.lastTime >= this.speed) {
      this.lastTime = timestamp;

      if (this.waiting) {
        if (timestamp >= this.waitUntil) this.waiting = false;
      } else {
        const role = this.roles[this.currentRole];

        if (!this.deleting) {
          this.charIndex++;
          const next = role.slice(0, this.charIndex);
          this.zone.run(() => this.typedText = next);
          if (this.charIndex >= role.length) {
            this.deleting = true;
            this.waiting  = true;
            this.waitUntil = timestamp + 2000;
            this.speed = 40;
          }
        } else {
          this.charIndex--;
          const next = this.roles[this.currentRole].slice(0, this.charIndex);
          this.zone.run(() => this.typedText = next);
          if (this.charIndex <= 0) {
            this.deleting = false;
            this.currentRole = (this.currentRole + 1) % this.roles.length;
            this.waiting  = true;
            this.waitUntil = timestamp + 400;
            this.speed = 80;
          }
        }
      }
    }

    this.rafId = requestAnimationFrame((t) => this.tick(t));
  }

  scrollToProjects() {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  }
  scrollToContact() {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  }
}
