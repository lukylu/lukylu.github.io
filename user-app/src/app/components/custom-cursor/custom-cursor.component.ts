import { Component, OnInit, OnDestroy, HostListener, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-custom-cursor',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="cursor-dot"   #dot></div>
    <div class="cursor-ring"  #ring></div>
    <div class="cursor-trail" #trail></div>
  `,
  styleUrl: './custom-cursor.component.css'
})
export class CustomCursorComponent implements AfterViewInit, OnDestroy {
  @ViewChild('dot')   dotRef!:   ElementRef<HTMLDivElement>;
  @ViewChild('ring')  ringRef!:  ElementRef<HTMLDivElement>;
  @ViewChild('trail') trailRef!: ElementRef<HTMLDivElement>;

  private mx = 0; private my = 0;
  private rx = 0; private ry = 0;
  private tx = 0; private ty = 0;
  private rafId!: number;
  isHovering = false;

  ngAfterViewInit() { this.animate(); }

  @HostListener('document:mousemove', ['$event'])
  onMove(e: MouseEvent) {
    this.mx = e.clientX; this.my = e.clientY;
    this.dotRef.nativeElement.style.transform =
      `translate(${e.clientX}px, ${e.clientY}px)`;
  }

  @HostListener('document:mousedown')
  onDown() { this.dotRef.nativeElement.classList.add('clicking'); }

  @HostListener('document:mouseup')
  onUp() { this.dotRef.nativeElement.classList.remove('clicking'); }

  private animate() {
    // ring follows with lag
    this.rx += (this.mx - this.rx) * 0.15;
    this.ry += (this.my - this.ry) * 0.15;
    this.ringRef.nativeElement.style.transform =
      `translate(${this.rx}px, ${this.ry}px)`;

    // trail follows with more lag
    this.tx += (this.mx - this.tx) * 0.07;
    this.ty += (this.my - this.ty) * 0.07;
    this.trailRef.nativeElement.style.transform =
      `translate(${this.tx}px, ${this.ty}px)`;

    this.rafId = requestAnimationFrame(() => this.animate());
  }

  ngOnDestroy() { cancelAnimationFrame(this.rafId); }
}
