import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  template: `
    <section id="contact" class="noise">
      <div class="sec-title">
        <span class="sec-num">08</span>
        <div>
          <span class="glitch" data-t="CONTACTO">CONTACTO</span>
          <div class="sec-line"></div>
        </div>
      </div>
      <div class="contact-layout">

        <div class="fpanel pbox">
          <div class="fph">
            <span>// NUEVO MENSAJE</span>
            <span class="blink">_</span>
          </div>
          <div class="cform">
            <div class="field">
              <label class="flbl">NOMBRE:</label>
              <input class="finp" type="text" placeholder="Tu nombre">
            </div>
            <div class="field">
              <label class="flbl">EMAIL:</label>
              <input class="finp" type="email" placeholder="tu@email.com">
            </div>
            <div class="field">
              <label class="flbl">MENSAJE:</label>
              <textarea class="finp" rows="4" placeholder="Escribe tu mensaje..."></textarea>
            </div>
            <button class="sbtn">▶ ENVIAR MENSAJE</button>
          </div>
        </div>

        <div class="lpanel">
          <p class="llbl">// TAMBIÉN PUEDES ENCONTRARME EN</p>
          <div class="lcards">
            <a class="lkcard" href="#" target="_blank">
              <span class="lkicon">⌥</span>
              <span class="lklbl">GITHUB</span>
              <span class="lkarr">→</span>
            </a>
            <a class="lkcard" href="#" target="_blank">
              <span class="lkicon">🔗</span>
              <span class="lklbl">LINKEDIN</span>
              <span class="lkarr">→</span>
            </a>
            <a class="lkcard" href="mailto:lucasfdezdev@gmail.com">
              <span class="lkicon">✉</span>
              <span class="lklbl">lucasfdezdev&#64;gmail.com</span>
              <span class="lkarr">→</span>
            </a>
            <a class="lkcard" href="tel:+34684604982">
              <span class="lkicon">📞</span>
              <span class="lklbl">+34 684 60 49 82</span>
              <span class="lkarr">→</span>
            </a>
          </div>
          <div class="avail">
            <span class="avdot blink">●</span>
            <div>
              <p class="avtitle">DISPONIBLE AHORA</p>
              <p class="avsub">Buscando primer empleo · Avilés, Asturias</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  `,
  styles: [`
    #contact { background: var(--bg); }
    .contact-layout {
      display: grid; grid-template-columns: 1fr 1fr;
      gap: 40px; align-items: start;
      position: relative; z-index: 1;
    }
    .fpanel { background: var(--surface); overflow: hidden; }
    .fph {
      background: var(--surface2); border-bottom: 1px solid var(--border);
      padding: 10px 20px; display: flex; align-items: center; gap: 8px;
      font-family: var(--fm); font-size: .73rem; color: var(--muted);
    }
    .cform { padding: 24px; display: flex; flex-direction: column; gap: 16px; }
    .field { display: flex; flex-direction: column; gap: 6px; }
    .flbl { font-family: var(--fm); font-size: .63rem; color: var(--cyan); letter-spacing: .07em; }
    .finp {
      background: var(--bg); border: 1px solid var(--border);
      color: var(--white); font-family: var(--fm); font-size: .83rem;
      padding: 9px 14px; outline: none;
      transition: border-color .2s, box-shadow .2s; resize: vertical;
    }
    .finp::placeholder { color: rgba(232,232,232,.2); }
    .finp:focus { border-color: var(--cyan); box-shadow: 0 0 8px rgba(0,255,255,.18); }
    .sbtn {
      font-family: var(--fp); font-size: .5rem;
      background: var(--cyan); color: var(--bg);
      border: 2px solid var(--cyan); padding: 12px;
      cursor: pointer; letter-spacing: .05em;
      box-shadow: 4px 4px 0 rgba(0,140,140,.5); transition: all .2s;
    }
    .sbtn:hover { background: transparent; color: var(--cyan); transform: translate(-2px,-2px); }
    .lpanel { display: flex; flex-direction: column; gap: 20px; }
    .llbl { font-family: var(--fm); font-size: .7rem; color: var(--muted); }
    .lcards { display: flex; flex-direction: column; gap: 10px; }
    .lkcard {
      background: var(--surface); padding: 14px 20px;
      display: flex; align-items: center; gap: 14px;
      color: var(--white); border: 2px solid var(--cyan);
      box-shadow: 4px 4px 0 rgba(0,140,140,.3);
      transition: transform .2s, border-color .2s;
    }
    .lkcard:hover { border-color: var(--magenta); transform: translateX(4px); color: var(--cyan); }
    .lkicon { font-size: 1.2rem; }
    .lklbl { font-family: var(--fp); font-size: .5rem; flex: 1; }
    .lkarr { color: var(--muted); }
    .avail {
      display: flex; align-items: center; gap: 16px;
      border: 1px solid rgba(0,255,65,.3); padding: 16px;
      background: rgba(0,255,65,.04);
    }
    .avdot { font-size: .9rem; color: var(--green); text-shadow: 0 0 8px var(--green); }
    .avtitle { font-family: var(--fp); font-size: .5rem; color: var(--green); margin-bottom: 4px; }
    .avsub { font-family: var(--fm); font-size: .73rem; color: var(--muted); }

    @media (max-width: 768px) { .contact-layout { grid-template-columns: 1fr; } }
    @media (max-width: 480px) {
      .cform { padding: 16px; }
      .sbtn { font-size: .42rem; padding: 10px; }
      .lklbl { font-size: .42rem; }
    }
  `]
})
export class ContactComponent {}
