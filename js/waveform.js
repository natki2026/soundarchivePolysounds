(function () {
  const canvas = document.getElementById('waveform-canvas');
  if (!canvas) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const ctx = canvas.getContext('2d');
  let phase = 0;
  let rafId;

  const waves = [
    { amplitude: 40, frequency: 0.012, speed: 0.04, opacity: 0.55 },
    { amplitude: 25, frequency: 0.018, speed: 0.06, opacity: 0.35 },
    { amplitude: 15, frequency: 0.025, speed: 0.03, opacity: 0.20 },
  ];

  function resize() {
    canvas.width  = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    waves.forEach(w => {
      ctx.beginPath();
      ctx.strokeStyle = `rgba(0,51,102,${w.opacity})`;
      ctx.lineWidth = 2;
      for (let x = 0; x < canvas.width; x++) {
        const y = canvas.height / 2 + Math.sin(x * w.frequency + phase * w.speed) * w.amplitude;
        x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
      }
      ctx.stroke();
    });
    phase++;
    rafId = requestAnimationFrame(draw);
  }

  resize();
  draw();

  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(resize, 100);
  });
})();
