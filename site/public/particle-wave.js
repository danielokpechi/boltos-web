// BoltOS kinetic particle wave: a flowing dotted ribbon that undulates like a
// sine wave, violet with brighter magenta highlights along its leading edge.
// Matches the brand pattern-v2 artwork.
if (!window.__boltWaveGuard) { window.__boltWaveGuard = 1;
class BoltParticleWave extends HTMLElement {
  connectedCallback() {
    this.style.display = 'block';
    this.style.position = this.style.position || 'absolute';
    this.style.inset = '0';
    if (!this.canvas) {
      this.canvas = document.createElement('canvas');
      this.canvas.style.cssText = 'width:100%;height:100%;display:block;';
      this.t = 0;
      this.resize = this.resize.bind(this);
      this.tick = this.tick.bind(this);
    }
    if (!this.canvas.isConnected) this.appendChild(this.canvas);
    this.running = this.getAttribute('running') !== 'false';
    window.removeEventListener('resize', this.resize);
    window.addEventListener('resize', this.resize);
    this.resize();
    cancelAnimationFrame(this.raf);
    this.draw();
    this.raf = requestAnimationFrame(this.tick);
  }
  static get observedAttributes() { return ['running']; }
  attributeChangedCallback(n, o, v) { if (n === 'running') this.running = v !== 'false'; }
  disconnectedCallback() { window.removeEventListener('resize', this.resize); }
  resize() {
    const r = this.getBoundingClientRect();
    this.w = this.canvas.width = Math.max(600, r.width) * devicePixelRatio;
    this.h = this.canvas.height = Math.max(120, r.height) * devicePixelRatio;
    this.draw();
  }
  tick() {
    if (!this.isConnected) { this.raf = 0; return; }
    this.raf = requestAnimationFrame(this.tick);
    if (!this.running) return;
    this.t += 0.0032;
    this.draw();
  }
  draw() {
    if (!this.canvas) return;
    if (!this.w || !this.h) this.resize();
    const ctx = this.canvas.getContext('2d'), w = this.w, h = this.h, dpr = devicePixelRatio, t = this.t;
    ctx.clearRect(0, 0, w, h);
    ctx.globalCompositeOperation = 'lighter'; // dots add up into a soft glow where they overlap

    // Ribbon colours: violet base, magenta highlight (no aqua, matching the artwork).
    const violet = [122, 58, 232], magenta = [214, 60, 190];

    const S = 48;                          // streamlines stacked into the ribbon
    const dx = 6.5 * dpr;                  // dot spacing along the flow
    const cols = Math.floor(w / dx) + 2;
    const band = Math.max(h, 720 * dpr);   // virtual height the ribbon fans over
    const midY = h * 0.54;
    const amp = band * 0.19;               // primary wave amplitude
    const gap = band * 0.30 / S;           // vertical spacing between streamlines

    for (let s = 0; s < S; s++) {
      const fs = s / (S - 1);              // 0 = back/top, 1 = front/bottom
      const phase = fs * 2.6;              // shear the streamlines so the ribbon twists as it flows
      const yOff = (fs - 0.5) * gap * S;
      const lineBright = Math.pow(fs, 1.5) * 0.92 + 0.05; // front streamlines are brightest
      for (let c = 0; c < cols; c++) {
        const fx = c / (cols - 1), x = fx * w;
        const primary = fx * 6.3 + t * 2 + phase;
        const wave = Math.sin(primary) * amp + Math.sin(fx * 12.5 - t * 1.1 + phase * 0.6) * amp * 0.22;
        const y = midY + yOff + wave;
        if (y < -20 || y > h + 20) continue;
        // Leading edge: brightest just past the wave crest as the ribbon turns over.
        const edge = 0.5 + 0.5 * Math.sin(primary - 1.4);
        const a = lineBright * (0.28 + 0.72 * edge);
        if (a < 0.02) continue;
        const m = Math.min(1, edge * 0.85 + fx * 0.12); // colour mix toward magenta at bright spots
        const r = (violet[0] + (magenta[0] - violet[0]) * m) | 0;
        const g = (violet[1] + (magenta[1] - violet[1]) * m) | 0;
        const b = (violet[2] + (magenta[2] - violet[2]) * m) | 0;
        const size = Math.max(0.5, (0.8 + 1.15 * fs) * dpr * (0.65 + 0.55 * edge));
        ctx.fillStyle = `rgba(${r},${g},${b},${Math.min(1, a).toFixed(3)})`;
        ctx.beginPath();
        ctx.arc(x, y, size, 0, 6.2832);
        ctx.fill();
      }
    }
    ctx.globalCompositeOperation = 'source-over';
  }
}
customElements.define('bolt-particle-wave', BoltParticleWave);
}
