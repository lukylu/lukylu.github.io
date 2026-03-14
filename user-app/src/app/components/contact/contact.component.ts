import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SectionTitleComponent } from '../section-title/section-title.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, SectionTitleComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  name    = '';
  email   = '';
  message = '';
  sent    = false;
  sending = false;

  onSubmit() {
    if (!this.name || !this.email || !this.message) return;
    this.sending = true;
    setTimeout(() => {
      this.sending = false;
      this.sent    = true;
    }, 1500);
  }

  links = [
    { label: 'GitHub',   icon: '⌥', url: 'https://github.com/tuusuario' },
    { label: 'LinkedIn', icon: '🔗', url: 'https://linkedin.com/in/tuperfil' },
    { label: 'Email',    icon: '✉',  url: 'mailto:lucasfdeziglesias24@gmail.com' },
    { label: 'Teléfono', icon: '📞', url: 'tel:+34684604982' },
  ];
}
