import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlitchTextComponent } from '../glitch-text/glitch-text.component';

@Component({
  selector: 'app-section-title',
  standalone: true,
  imports: [CommonModule, GlitchTextComponent],
  template: `
    <div class="section-title">
      <span class="section-num">{{ num }}</span>
      <div class="title-content">
        <app-glitch-text [text]="label" size="lg" />
        <div class="title-line"></div>
      </div>
    </div>
  `,
  styleUrl: './section-title.component.css'
})
export class SectionTitleComponent {
  @Input() label = '';
  @Input() num   = '01';
}
