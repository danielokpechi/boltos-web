// BoltOS kinetic particle wave: dotted sine field in brand gradient (violet -> pink -> aqua)
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
  color(f) { // 0..1 across width: violet -> pink -> aqua
    const stops = [[123,47,226],[214,32,134],[53,199,223]];
    const p = f < 0.5 ? f * 2 : (f - 0.5) * 2, [a, b] = f < 0.5 ? [stops[0], stops[1]] : [stops[1], stops[2]];
    return [0,1,2].map(i => Math.round(a[i] + (b[i] - a[i]) * p));
  }
  tick() {
    if (!this.isConnected) { this.raf = 0; return; }
    this.raf = requestAnimationFrame(this.tick);
    if (!this.running) return;
    this.t += 0.004;
    this.draw();
  }
  draw() {
    if (!this.canvas) return;
    if (!this.w || !this.h) this.resize();
    const ctx = this.canvas.getContext('2d'), w = this.w, h = this.h, dpr = devicePixelRatio;
    ctx.clearRect(0, 0, w, h);
    const rows = 34, cols = Math.floor(w / (11 * dpr));
    const band = Math.max(h, 900 * dpr); // fan the wave over a tall virtual band so short hosts stay dense
    const yTop = (h - band) / 2;
    for (let c = 0; c <= cols; c++) {
      const fx = c / cols, x = fx * w;
      const [r, g, b] = this.color(fx);
      for (let rI = 0; rI < rows; rI++) {
        const fr = rI / rows;
        const yBase = yTop + band * 0.42 + Math.sin(fx * 4.5 + this.t * 3 + fr * 0.7) * band * 0.16 * (0.4 + fr * 0.6)
          + Math.sin(fx * 9 - this.t * 2) * band * 0.05;
        const y = yBase + fr * band * 0.34;
        const fade = (1 - fr) * 0.75 + 0.08;
        const twinkle = 0.6 + 0.4 * Math.sin(this.t * 6 + c * 0.35 + rI);
        ctx.fillStyle = `rgba(${r},${g},${b},${Math.min(1, fade * twinkle * 1.15).toFixed(3)})`;
        const size = (2.0 - fr * 1.2) * dpr * (0.8 + 0.4 * Math.sin(fx * 6 + this.t * 4));
        ctx.beginPath();
        ctx.arc(x, y, Math.max(0.4, size), 0, 6.2832);
        ctx.fill();
      }
    }
  }
}
customElements.define('bolt-particle-wave', BoltParticleWave);
}
