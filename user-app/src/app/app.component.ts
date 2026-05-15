import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageLoaderComponent } from './components/page-loader/page-loader.component';
import { CustomCursorComponent } from './components/custom-cursor/custom-cursor.component';
import { ScrollProgressComponent } from './components/scroll-progress/scroll-progress.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { EducationComponent } from './components/education/education.component';
import { CertificatesComponent } from './components/certificates/certificates.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { LanguagesComponent } from './components/languages/languages.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    PageLoaderComponent,
    CustomCursorComponent,
    ScrollProgressComponent,
    NavbarComponent,
    HeroComponent,
    EducationComponent,
    CertificatesComponent,
    ExperienceComponent,
    LanguagesComponent,
    SkillsComponent,
    ProjectsComponent,
    ContactComponent,
    FooterComponent
  ],
  template: `
    <app-custom-cursor></app-custom-cursor>
    <app-scroll-progress></app-scroll-progress>
    <app-page-loader (loaded)="onLoaded()"></app-page-loader>
    <div id="app" [style.opacity]="appVisible ? '1' : '0'" style="transition: opacity .6s">
      <app-navbar></app-navbar>
      <app-hero></app-hero>
      <app-education></app-education>
      <app-certificates></app-certificates>
      <app-experience></app-experience>
      <app-languages></app-languages>
      <app-skills></app-skills>
      <app-projects></app-projects>
      <app-contact></app-contact>
      <app-footer></app-footer>
    </div>
  `,
  styles: []
})
export class AppComponent {
  appVisible = false;
  onLoaded() { this.appVisible = true; }
}
