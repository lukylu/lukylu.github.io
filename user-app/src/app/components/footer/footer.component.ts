import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer class="footer">
      <div class="footer-line"></div>
      <div class="footer-content">
        <span class="footer-copy">
          <span class="prompt">C:\&gt;</span>
          © {{ year }} LUCAS FDEZ IGLESIAS — JUNIOR DEV
        </span>
        <span class="footer-made">
          HECHO CON <span class="heart">♥</span> Y MUCHO <span class="angular">ANGULAR</span>
        </span>
        <span class="footer-status">
          <span class="dot blink">●</span> ONLINE
        </span>
      </div>
    </footer>
  `,
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  year = new Date().getFullYear();
}
