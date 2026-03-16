import { Component, OnInit, OnDestroy, ViewEncapsulation, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollService } from '../../services/scroll.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="hero" class="noise">
      <div class="hero-grid"></div>
      <div class="hero-glow"></div>
      <div class="corner ctlx"></div><div class="corner ctrx"></div>
      <div class="corner cblx"></div><div class="corner cbrx"></div>
      <div class="sbar t">
        <span>&gt;&gt; SYSTEM ONLINE</span>
        <span class="dg">●</span>
        <span>READY</span>
      </div>
      <div class="hero-content">
        <p class="greet"><span>&gt;&gt;&gt;</span> HOLA, SOY</p>
        <h1>
          <span class="glitch" data-t="LUCAS FDEZ IGLESIAS"
            style="font-size:clamp(1.4rem,4vw,3rem)">LUCAS FDEZ IGLESIAS</span>
        </h1>
        <div class="hero-role">
          <span class="role-p">$</span>
          <span id="typed">{{typed}}</span>
          <span class="blink" style="color:var(--yellow)">█</span>
        </div>
        <p class="hero-desc">
          Joven <span class="hl">Desarrollador de Aplicaciones Web</span> con ganas de poner en práctica
          mis conocimientos en el ámbito laboral. Estudiando <span class="hl">DAW en FuniverS</span>
          y con experiencia real en prácticas. Basado en <span class="hl">Avilés, Asturias</span>.
        </p>
        <div class="hero-acts">
          <button class="btn-p" (click)="scroll('projects')">▶ VER PROYECTOS</button>
          <button class="btn-o" (click)="scroll('contact')">✉ CONTACTAR</button>
        </div>
        <div class="badges">
          <span class="badge">HTML</span><span class="badge">CSS</span>
          <span class="badge">JavaScript</span><span class="badge">PHP</span>
          <span class="badge">MySQL</span><span class="badge">Java</span><span class="badge">Docker</span>
        </div>
      </div>
      <div class="ascii"> ██████╗ ███████╗██╗   ██╗
 ██╔══██╗██╔════╝██║   ██║
 ██║  ██║█████╗  ██║   ██║
 ██║  ██║██╔══╝  ╚██╗ ██╔╝
 ██████╔╝███████╗ ╚████╔╝
 ╚═════╝ ╚══════╝  ╚═══╝</div>
      <div class="scroll-hint"><span>SCROLL DOWN</span><div class="scroll-arrow">▼</div></div>
      <div class="sbar b"><span>LINE 01</span><span>COL 00</span><span>UTF-8</span><span class="blink">■ RECORDING</span></div>
    </section>
  `,
  styles: [`
    #hero { min-height:100vh; display:flex; align-items:center; background:var(--bg); padding:100px 64px 60px; }
    .hero-grid { position:absolute; inset:0; background-image:linear-gradient(rgba(0,255,255,.025) 1px,transparent 1px),linear-gradient(90deg,rgba(0,255,255,.025) 1px,transparent 1px); background-size:32px 32px; pointer-events:none; }
    .hero-glow { position:absolute; width:500px; height:500px; border-radius:50%; background:radial-gradient(circle,rgba(0,255,255,.06),transparent 70%); right:-100px; top:50%; transform:translateY(-50%); pointer-events:none; }
    .corner { position:absolute; width:22px; height:22px; border-color:var(--cyan); border-style:solid; opacity:.5; }
    .ctlx { top:72px; left:24px; border-width:2px 0 0 2px; }
    .ctrx { top:72px; right:24px; border-width:2px 2px 0 0; }
    .cblx { bottom:32px; left:24px; border-width:0 0 2px 2px; }
    .cbrx { bottom:32px; right:24px; border-width:0 2px 2px 0; }
    .sbar { position:absolute; left:0; right:0; display:flex; gap:24px; padding:4px 64px; font-family:var(--fm); font-size:.62rem; color:var(--muted); border:solid var(--border); }
    .sbar.t { top:52px; border-width:1px 0; }
    .sbar.b { bottom:0; border-width:1px 0 0; }
    .dg { color:var(--green); text-shadow:0 0 6px var(--green); }
    .hero-content { max-width:680px; display:flex; flex-direction:column; gap:28px; z-index:2; animation:fadeUp .8s ease both; }
    .greet { font-family:var(--fm); font-size:.85rem; color:var(--muted); }
    .greet span { color:var(--green); margin-right:8px; }
    .hero-role { font-family:var(--fr); font-size:1.9rem; color:var(--yellow); display:flex; align-items:center; gap:4px; text-shadow:0 0 10px rgba(255,255,0,.4); min-height:2.4rem; }
    .role-p { color:var(--magenta); margin-right:8px; }
    .hero-desc { font-family:var(--fm); font-size:.88rem; color:var(--muted); line-height:1.8; max-width:500px; }
    .hero-desc .hl { color:var(--cyan); text-shadow:0 0 6px rgba(0,255,255,.4); }
    .hero-acts { display:flex; gap:16px; flex-wrap:wrap; }
    .btn-p { font-family:var(--fp); font-size:.5rem; background:var(--cyan); color:var(--bg); border:2px solid var(--cyan); padding:12px 20px; cursor:pointer; box-shadow:4px 4px 0 rgba(0,140,140,.5); transition:all .2s; letter-spacing:.04em; }
    .btn-p:hover { background:transparent; color:var(--cyan); transform:translate(-2px,-2px); box-shadow:6px 6px 0 rgba(0,140,140,.5); }
    .btn-o { font-family:var(--fp); font-size:.5rem; background:transparent; color:var(--magenta); border:2px solid var(--magenta); padding:12px 20px; cursor:pointer; box-shadow:4px 4px 0 rgba(140,0,140,.4); transition:all .2s; letter-spacing:.04em; }
    .btn-o:hover { background:var(--magenta); color:var(--bg); transform:translate(-2px,-2px); }
    .badges { display:flex; gap:8px; flex-wrap:wrap; }
    .badge { font-family:var(--fm); font-size:.7rem; color:var(--green); border:1px solid rgba(0,255,65,.35); padding:2px 10px; background:rgba(0,255,65,.05); text-shadow:0 0 4px rgba(0,255,65,.4); }
    .ascii { position:absolute; right:64px; top:50%; transform:translateY(-50%); opacity:.05; font-family:var(--fm); font-size:.68rem; color:var(--cyan); line-height:1.3; pointer-events:none; white-space:pre; }
    .scroll-hint { position:absolute; right:32px; bottom:48px; display:flex; flex-direction:column; align-items:center; gap:6px; font-family:var(--fm); font-size:.58rem; color:var(--muted); letter-spacing:.1em; }
    .scroll-arrow { animation:bounce 1.5s infinite; }
    @media(max-width:768px){ #hero{padding:100px 24px 60px} .ascii{display:none} .scroll-hint{display:none} .sbar{padding:4px 24px} .hero-content{gap:20px} .hero-role{font-size:1.5rem} .hero-desc{font-size:.8rem} }
    @media(max-width:480px){ #hero{padding:90px 16px 50px} .hero-role{font-size:1.2rem} .hero-desc{font-size:.75rem} .btn-p,.btn-o{font-size:.42rem;padding:10px 14px} .hero-acts{flex-direction:column;gap:10px} .badges{gap:6px} .badge{font-size:.62rem;padding:2px 7px} }
  `]
})
export class HeroComponent implements OnInit, OnDestroy {
  typed = '';
  private roles = ['DESARROLLADOR WEB','ESTUDIANTE DAW','FRONTEND DEVELOPER','DISPONIBLE AHORA'];
  private ri = 0; private ti = 0; private deleting = false;
  private timeoutId: any;
  constructor(private scrollService: ScrollService, private cdr: ChangeDetectorRef) {}
  ngOnInit(): void { this.timeoutId = setTimeout(() => this.typeStep(), 3200); }
  ngOnDestroy(): void { clearTimeout(this.timeoutId); }
  scroll(id: string): void { this.scrollService.scrollTo(id); }
  private typeStep(): void {
    const r = this.roles[this.ri];
    if (!this.deleting) {
      this.typed = r.slice(0, ++this.ti);
      if (this.ti >= r.length) { this.deleting = true; this.cdr.markForCheck(); this.timeoutId = setTimeout(() => this.typeStep(), 2000); return; }
    } else {
      this.typed = r.slice(0, --this.ti);
      if (this.ti === 0) { this.deleting = false; this.ri = (this.ri + 1) % this.roles.length; this.cdr.markForCheck(); this.timeoutId = setTimeout(() => this.typeStep(), 400); return; }
    }
    this.cdr.markForCheck();
    this.timeoutId = setTimeout(() => this.typeStep(), this.deleting ? 40 : 80);
  }
}
