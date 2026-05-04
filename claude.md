# Polysounds – Master Build-Anleitung

> System-Prompt für die Programmierungsphase. Diese Datei ist die einzige Wahrheitsquelle für Tech-Stack, Design-System und Komponenten-Logik.

---

## 1. Projekt-Kontext

**Auftraggeber:** Soundarchive Vertriebs- und Verlagsgesellschaft mbH  
**Produkt:** Polysounds – KI-gestützte Audioproduktion  
**USP:** Traditional Excellence meets AI Efficiency (25 Jahre Audio-Expertise + KI-Workflow)  
**Zielgruppe:** Modern Content Creator & Marketing Entscheider (DACH)  
**Sprache:** Deutsch

---

## 2. Tech-Stack

```
Typ:        Statische Website (kein Framework, kein Build-Tool)
Dateien:    HTML · CSS · Vanilla JavaScript
Hosting:    Beliebiges Static Hosting (Netlify, GitHub Pages, Hostinger)
```

### Dateistruktur
```
/
├── index.html          ← Haupt-Einstiegspunkt
├── css/
│   ├── main.css        ← Globale Styles, CSS-Variablen
│   ├── components.css  ← Wiederverwendbare Komponenten
│   └── animations.css  ← Waveform- und Scroll-Animationen
├── js/
│   ├── waveform.js     ← Hero Canvas-Animation
│   ├── scroll.js       ← Scroll-Reveal-Effekte
│   └── form.js         ← Kontaktformular-Handling
├── img/
│   ├── logo.png        ← Polysounds Logo (max. 40px Höhe)
│   ├── hero-visual.jpg ← https://mcp-img.aoffice.cloud/images/20260504_084917_35b2e59b.jpg
│   ├── services-visual.jpg ← https://mcp-img.aoffice.cloud/images/20260504_085131_795bbd65.jpg
│   └── features-visual.jpg ← https://mcp-img.aoffice.cloud/images/20260504_085155_3e57c9de.jpg
├── sections/           ← Markdown-Quelldateien (Referenz, nicht direkt gerendert)
├── legal/              ← Markdown-Quelldateien für Impressum/Datenschutz
└── claude.md           ← Diese Datei
```

---

## 3. Design-System

### 3.1 Farbpalette (CSS Custom Properties)
```css
:root {
  --color-primary:    #003366;  /* Deep Blue – Headlines, CTAs, Akzente */
  --color-secondary:  #1A73E8;  /* Action Blue – Hover, interaktive Elemente */
  --color-bg-white:   #FFFFFF;  /* Haupthintergrund */
  --color-bg-gray:    #F4F4F4;  /* Abgrenzung zwischen Sektionen */
  --color-text:       #333333;  /* Body-Text */
  --color-border:     #CCCCCC;  /* Karten-Umrandung */
}
```

### 3.2 Typografie
```css
/* Google Fonts einbinden: Montserrat */
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap');

body        { font-family: 'Montserrat', sans-serif; font-size: 16px; line-height: 1.6; color: var(--color-text); }
h1          { font-size: clamp(2rem, 5vw, 3.5rem); font-weight: 700; color: var(--color-primary); }
h2          { font-size: clamp(1.5rem, 3vw, 2.5rem); font-weight: 700; color: var(--color-primary); }
h3          { font-size: 1.25rem; font-weight: 600; color: var(--color-primary); }
```

### 3.3 Abstände & Layout
```css
.container  { max-width: 1200px; margin: 0 auto; padding: 0 24px; }
.section    { padding: 80px 0; }
.section--gray { background: var(--color-bg-gray); }
```

### 3.4 Komponenten-Stil
```css
/* Karten */
.card {
  border: 1px solid var(--color-border);
  border-radius: 4px;
  padding: 32px;
  background: var(--color-bg-white);
}

/* Primär-Button */
.btn-primary {
  background: var(--color-primary);
  color: #fff;
  border: none;
  padding: 14px 28px;
  border-radius: 4px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s ease;
}
.btn-primary:hover { background: #004080; }

/* Sekundär-Button */
.btn-secondary {
  background: transparent;
  color: var(--color-primary);
  border: 2px solid var(--color-primary);
  padding: 12px 26px;
  border-radius: 4px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
}
.btn-secondary:hover { background: var(--color-primary); color: #fff; }
```

---

## 4. Sektionen-Mapping (index.html Aufbau)

Die `index.html` besteht aus diesen Sektionen in dieser Reihenfolge:

| # | Sektion | Markdown-Quelle | Hintergrund |
|---|---------|-----------------|-------------|
| 1 | `<section id="hero">` | sections/01_hero.md | `#FFFFFF` |
| 2 | `<section id="problem">` | sections/02_problem.md | `#F4F4F4` |
| 3 | `<section id="solution">` | sections/03_solution.md | `#FFFFFF` |
| 4 | `<section id="features">` | sections/04_features.md | `#F4F4F4` |
| 5 | `<section id="services">` | sections/05_services.md | `#FFFFFF` |
| 6 | `<section id="faq">` | sections/06_faq.md | `#F4F4F4` |
| 7 | `<section id="contact">` | sections/07_contact.md | `#003366` (Kontrastsektion) |

---

## 5. Hero-Sektion: Sound-Waveform-Komponente

### Konzept
Die Hero-Sektion nutzt eine **animierte Canvas-Waveform** als visuellen Anker, der Audio-Expertise und KI-Innovation vereint.

### Hinweis zu shadcn
Eine Suche im shadcn-Registry nach Waveform/Audio-Komponenten hat keine direkten Treffer ergeben. Die Waveform-Animation wird daher **nativ via Canvas API** implementiert (kein externes Framework nötig).

### Implementierung (js/waveform.js)
```javascript
// Sinuswellen-Animation auf Canvas-Hintergrund der Hero-Sektion
const canvas = document.getElementById('waveform-canvas');
const ctx = canvas.getContext('2d');
let phase = 0;

function drawWaveform() {
  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const waves = [
    { amplitude: 40, frequency: 0.012, speed: 0.04, opacity: 0.6 },
    { amplitude: 25, frequency: 0.018, speed: 0.06, opacity: 0.4 },
    { amplitude: 15, frequency: 0.025, speed: 0.03, opacity: 0.25 },
  ];

  waves.forEach(wave => {
    ctx.beginPath();
    ctx.strokeStyle = `rgba(0, 51, 102, ${wave.opacity})`; /* #003366 */
    ctx.lineWidth = 2;
    for (let x = 0; x < canvas.width; x++) {
      const y = canvas.height / 2 + Math.sin(x * wave.frequency + phase * wave.speed) * wave.amplitude;
      x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
    }
    ctx.stroke();
  });

  phase++;
  requestAnimationFrame(drawWaveform);
}

drawWaveform();
window.addEventListener('resize', () => { canvas.width = canvas.offsetWidth; });
```

### Hero HTML-Struktur
```html
<section id="hero">
  <canvas id="waveform-canvas" aria-hidden="true"></canvas>
  <div class="container hero__content">
    <img src="img/logo.png" alt="Polysounds" class="hero__logo">
    <h1>Ihre Stimme. Perfektioniert durch KI.</h1>
    <p class="hero__subline">
      Wo 25 Jahre Audio-Exzellenz auf modernste KI-Technologie trifft –
      für Podcasts, Erklärvideos, E-Learning und Social Ads, die wirklich gehört werden.
    </p>
    <div class="hero__cta">
      <a href="#contact" class="btn-primary">Jetzt kostenlos beraten lassen</a>
      <a href="#services" class="btn-secondary">Unsere Leistungen entdecken</a>
    </div>
    <p class="hero__trust">Vertrauen von: <strong>Daimler AG · EY · Marc Cain · Hansa-Park</strong></p>
  </div>
</section>
```

---

## 6. Komponenten-Logik: Markdown → HTML

Die Markdown-Dateien in `/sections/` sind **Redaktions-Quelldateien**, kein dynamisches Rendering. Beim Programmieren werden ihre Inhalte manuell in saubere HTML-Sektionen übertragen.

**Regel:** Jede Markdown-Datei = eine `<section>` in `index.html`.

| Markdown-Element | HTML-Entsprechung |
|-----------------|-------------------|
| `## Überschrift` | `<h2>` |
| `### Unterabschnitt` | `<h3>` + `.card` |
| `**Fett**` | `<strong>` |
| Tabellen | `.table-responsive > <table>` |
| Listen | `<ul class="feature-list">` |
| CTA-Links | `.btn-primary` oder `.btn-secondary` |

---

## 7. Bilder

Alle Bilder wurden mit Google Imagen 4.0 generiert (Hell & Clean Stil, White + Primary Blue #003366):

| Datei | URL | Sektion |
|-------|-----|---------|
| `img/hero-visual.jpg` | https://mcp-img.aoffice.cloud/images/20260504_084917_35b2e59b.jpg | Hero |
| `img/services-visual.jpg` | https://mcp-img.aoffice.cloud/images/20260504_085131_795bbd65.jpg | Services |
| `img/features-visual.jpg` | https://mcp-img.aoffice.cloud/images/20260504_085155_3e57c9de.jpg | Features |

**Logo:** https://lh3.googleusercontent.com/sitesv/AA5AbUDJ8kSsEWtnZ7H9lsqXw2DqQ1GiKkSuhSPYkHsBwbx62SU5FNw9P7riw-Vy_07MwKeya3lKKo3Fz-YlE4l6gvXO8SzUEip2PWV0O5-CmufZ304BouWb2tMzG1Vv8miIWtkTx7ZwpLaITt4nxH7V97Ik5N_9DOLHXMTKJuph_JNPPK-alRx1m0nL9-w=w16383 (max-height: 40px im Header)

---

## 8. Navigation (Header)

```html
<header class="site-header">
  <div class="container header__inner">
    <a href="#hero"><img src="img/logo.png" alt="Polysounds" style="max-height:40px"></a>
    <nav>
      <a href="#solution">Lösung</a>
      <a href="#services">Leistungen</a>
      <a href="#features">Features</a>
      <a href="#faq">FAQ</a>
      <a href="#contact" class="btn-primary">Kontakt</a>
    </nav>
  </div>
</header>
```

---

## 9. Footer

```html
<footer class="site-footer">
  <div class="container">
    <p>© 2026 Soundarchive Vertriebs- und Verlagsgesellschaft mbH</p>
    <nav>
      <a href="impressum.html">Impressum</a>
      <a href="datenschutz.html">Datenschutz</a>
    </nav>
  </div>
</footer>
```

---

## 10. Rechtliche Seiten

Zwei separate HTML-Seiten aus den Markdown-Quelldateien:
- `impressum.html` ← Inhalt aus `legal/impressum.md`
- `datenschutz.html` ← Inhalt aus `legal/datenschutz.md`

**Firmendaten:**
- Soundarchive Vertriebs- und Verlagsgesellschaft mbH
- Ludwig-Finckh-Str. 9, 72766 Reutlingen
- Geschäftsführer: Marc Gminder
- HRB 721895 (Amtsgericht Stuttgart)
- USt-IdNr.: DE252228924
- Tel: +49 7121 411661 · E-Mail: office@sound-archive.com

---

## 11. Performance & SEO

- Bilder als `<img loading="lazy">` einbinden
- Meta-Tags: `description`, `og:title`, `og:image` für Social Sharing
- Strukturierte Daten: `LocalBusiness` Schema.org für Soundarchive GmbH
- Canvas-Animation nur starten wenn `prefers-reduced-motion: no-preference`
- Formular: Netlify Forms oder Formspree (kein Backend nötig)
