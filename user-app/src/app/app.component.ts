import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollService } from './services/scroll.service';

import { CustomCursorComponent }   from './components/custom-cursor/custom-cursor.component';
import { PageLoaderComponent }     from './components/page-loader/page-loader.component';
import { NavbarComponent }         from './components/navbar/navbar.component';
import { ScrollProgressComponent } from './components/scroll-progress/scroll-progress.component';
import { HeroComponent }           from './components/hero/hero.component';
import { EducationComponent }      from './components/education/education.component';
import { ExperienceComponent }     from './components/experience/experience.component';
import { LanguagesComponent }      from './components/languages/languages.component';
import { SkillsComponent }         from './components/skills/skills.component';
import { ProjectsComponent }       from './components/projects/projects.component';
import { ContactComponent }        from './components/contact/contact.component';
import { FooterComponent }         from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    CustomCursorComponent,
    PageLoaderComponent,
    NavbarComponent,
    ScrollProgressComponent,
    HeroComponent,
    EducationComponent,
    ExperienceComponent,
    LanguagesComponent,
    SkillsComponent,
    ProjectsComponent,
    ContactComponent,
    FooterComponent,
  ],
  template: `
    <app-page-loader *ngIf="loading" (loaded)="onLoaded()" />
    <div class="app-shell" [class.visible]="!loading">
      <app-scroll-progress />
      <app-custom-cursor />
      <app-navbar />
      <main>
        <app-hero />
        <app-education />
        <app-experience />
        <app-languages />
        <app-skills />
        <app-projects />
        <app-contact />
      </main>
      <app-footer />
    </div>
  `,
  styles: [`.app-shell{opacity:0;transition:opacity .6s ease}.app-shell.visible{opacity:1}`]
})
export class AppComponent implements OnInit {
  loading = true;
  constructor(private scrollService: ScrollService) {}
  ngOnInit() {}
  onLoaded() {
    this.loading = false;
    setTimeout(() => this.scrollService.observe(), 100);
  }
}
