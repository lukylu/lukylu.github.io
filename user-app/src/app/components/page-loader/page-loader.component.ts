import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-page-loader',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="loader" [class.hide]="hidden">
      <div class="loader-screen">
        <div class="boot-text">
          <p class="bios-line">PORTFOLIO BIOS v1.0 — 2025</p>
          <p class="bios-line">CPU: JUNIOR DEV @ 100MHz</p>
          <p class="bios-line">RAM: 640KB IDEAS... OK</p>
          <p class="bios-line">SKILLS: DETECTING...</p>
          <p class="bios-line" *ngFor="let s of loadedSkills">
            <span class="ok">[OK]</span> {{ s }}
          </p>
          <p class="bios-line blink" *ngIf="!hidden">
            LOADING PORTFOLIO<span class="dots">{{ dots }}</span>
          </p>
          <p class="bios-line done" *ngIf="hidden">SYSTEM READY ■</p>
        </div>
        <div class="progress-bar">
          <div class="progress-fill" [style.width.%]="progress"></div>
        </div>
        <p class="progress-label">{{ progress }}%</p>
      </div>
    </div>
  `,
  styleUrl: './page-loader.component.css'
})
export class PageLoaderComponent implements OnInit {
  @Output() loaded = new EventEmitter<void>();

  hidden  = false;
  progress = 0;
  dots = '';
  loadedSkills: string[] = [];

  private allSkills = ['HTML/CSS', 'TypeScript', 'Angular', 'Git'];

  ngOnInit() {
    this.runBootSequence();
  }

  private runBootSequence() {
    // Dot animation
    let d = 0;
    const dotsInterval = setInterval(() => {
      d = (d + 1) % 4;
      this.dots = '.'.repeat(d);
    }, 300);

    // Progress + skills
    const totalMs = 2800;
    const steps = 40;
    const stepMs = totalMs / steps;
    let step = 0;

    const progressInterval = setInterval(() => {
      step++;
      this.progress = Math.min(100, Math.round((step / steps) * 100));

      // Load skills at certain thresholds
      if (this.progress === 25) this.loadedSkills.push(this.allSkills[0]);
      if (this.progress === 50) this.loadedSkills.push(this.allSkills[1]);
      if (this.progress === 70) this.loadedSkills.push(this.allSkills[2]);
      if (this.progress === 90) this.loadedSkills.push(this.allSkills[3]);

      if (step >= steps) {
        clearInterval(progressInterval);
        clearInterval(dotsInterval);
        setTimeout(() => {
          this.hidden = true;
          setTimeout(() => this.loaded.emit(), 600);
        }, 300);
      }
    }, stepMs);
  }
}
