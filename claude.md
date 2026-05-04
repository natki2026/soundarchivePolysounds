# Polysounds – Referenz für zukünftige Änderungen

**Auftraggeber:** Soundarchive Vertriebs- und Verlagsgesellschaft mbH  
**Produkt:** Polysounds – KI-gestützte Audioproduktion  
**USP:** Traditional Excellence meets AI Efficiency (25 Jahre Audio-Expertise + KI-Workflow)  
**Zielgruppe:** Content Creator & Marketing Entscheider (DACH) · Sprache: Deutsch

---

## Tech-Stack

Statische Website – HTML · CSS · Vanilla JavaScript · kein Build-Tool

```
index.html          Haupt-Einstiegspunkt (alle 7 Sektionen)
impressum.html      Impressum
datenschutz.html    Datenschutzerklärung
css/main.css        Reset, Variablen, Layout, Header, Footer
css/components.css  Alle UI-Komponenten und Sektion-Styles
css/animations.css  Scroll-Reveal, Hover, Transitions
js/waveform.js      Canvas Sinuswellen-Animation (Hero)
js/scroll.js        IntersectionObserver Scroll-Reveal + Smooth-Scroll
js/form.js          Kontaktformular (Formspree), FAQ-Accordion, Mobile-Nav
```

---

## Design-System

```css
:root {
  --color-primary:   #003366;  /* Deep Blue – Headlines, CTAs */
  --color-secondary: #1A73E8;  /* Action Blue – Hover, Links */
  --color-bg-white:  #FFFFFF;
  --color-bg-gray:   #F4F4F4;
  --color-text:      #333333;
  --color-border:    #CCCCCC;
}
/* Font: Montserrat 400/600/700 via Google Fonts */
/* Container: max-width 1200px, padding 0 24px */
/* Section padding: 80px 0 (56px auf Mobile) */
/* Cards: border 1px solid #CCCCCC, border-radius 4px */
/* Buttons: border-radius 4px, hover primary → #004080 */
```

---

## Sektionen (index.html)

| ID | Hintergrund | Inhalt |
|----|-------------|--------|
| `#hero` | Weiß | Canvas-Waveform, H1, Subline, 2 CTAs, Trust-Logos |
| `#problem` | Grau | 3 Pain-Cards (KI-Falle, Zeitmangel, Skalierbarkeit) |
| `#solution` | Weiß | 3-Schritt-Workflow + Format-Grid + Hero-Visual |
| `#features` | Grau | 6 Feature-Cards + Vergleichstabelle + Features-Visual |
| `#services` | Weiß | 4 Service-Cards + Preistabelle + Services-Visual |
| `#faq` | Grau | Accordion, 4 Gruppen, 11 Fragen |
| `#contact` | `#003366` | Formular (Formspree) + Kontakt-Sidebar |

---

## Assets (externe URLs – direkt in HTML eingebunden)

| Verwendung | URL |
|-----------|-----|
| Logo (Header + Hero) | `https://lh3.googleusercontent.com/sitesv/AA5AbUDJ8kSsEWtnZ7H9lsqXw2DqQ1GiKkSuhSPYkHsBwbx62SU5FNw9P7riw-Vy_07MwKeya3lKKo3Fz-YlE4l6gvXO8SzUEip2PWV0O5-CmufZ304BouWb2tMzG1Vv8miIWtkTx7ZwpLaITt4nxH7V97Ik5N_9DOLHXMTKJuph_JNPPK-alRx1m0nL9-w=w16383` |
| Solution-Visual | `https://mcp-img.aoffice.cloud/images/20260504_084917_35b2e59b.jpg` |
| Services-Visual | `https://mcp-img.aoffice.cloud/images/20260504_085131_795bbd65.jpg` |
| Features-Visual | `https://mcp-img.aoffice.cloud/images/20260504_085155_3e57c9de.jpg` |

---

## Kontaktformular

Formspree-Integration. In `index.html` Zeile mit `action="https://formspree.io/f/YOUR_FORM_ID"` die ID durch die echte Formspree-Form-ID ersetzen.  
Felder: Name*, E-Mail*, Unternehmen, Telefon, Format-Interesse (Dropdown), Projektbeschreibung, Quelle (Dropdown), Datenschutz-Checkbox*.  
Honeypot-Feld `.hp-field` vorhanden. Erfolgs-Div: `#form-success`.

---

## Firmendaten (für Impressum/Datenschutz)

- **Firma:** Soundarchive Vertriebs- und Verlagsgesellschaft mbH
- **Adresse:** Ludwig-Finckh-Str. 9, 72766 Reutlingen
- **GF:** Marc Gminder · **HRB:** 721895 (AG Stuttgart) · **USt:** DE252228924
- **Tel:** +49 7121 411661 · **Mail:** office@sound-archive.com
