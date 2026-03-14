import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-glitch-text',
  standalone: true,
  imports: [CommonModule],
  template: `
    <span
      class="glitch"
      [class]="'glitch--' + size"
      [attr.data-text]="text">
      {{ text }}
    </span>
  `,
  styleUrl: './glitch-text.component.css'
})
export class GlitchTextComponent {
  /** The text to display with glitch effect */
  @Input() text = '';
  /** 'sm' | 'md' | 'lg' | 'xl' */
  @Input() size: 'sm' | 'md' | 'lg' | 'xl' = 'md';
}
