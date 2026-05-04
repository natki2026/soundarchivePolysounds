## 1. Zielsetzung
Dieser Workflow dient dazu, basierend auf einem spezifischen Thema eine vollständige, modulare Website-Struktur in Form von Markdown-Dateien zu generieren. Die KI fungiert hierbei als Strategie-Berater und Content-Architekt.

---

## 2. Der Prozess (Schritte für die KI)

### Schritt 1: Themen-Recherche & Strategie
*   Deep-Dive Web-Analyse: Führe eine Web-Analyse von sound-archive.com durch. Extrahiere die Core-Value-Proposition (25 Jahre Erfahrung, namhafte Referenzen wie Daimler/Hansa-Park) und den professionellen Tone-of-Voice.

* Diagramm-Integration: Analysiere das Bild image.png. Die neue Website polysounds muss das Thema "Sprache" als zentralen Anker nutzen und die drei KI-Säulen (KI Konzept Generator, KI Text Generator, KI Vertonung) für die vier Geschäftsbereiche (Podcast, Erklärvideo, E-Learning, Social Ad) modular abbilden.

* Zielgruppen-Persona: Definiere die Zielgruppe als "Modern Content Creator & Marketing Entscheider", die Effizienz durch KI suchen, aber die Qualität eines etablierten Sound-Studios erwarten.

* Wettbewerbs-Differenzierung: Formuliere das Alleinstellungsmerkmal (USP): Die Symbiose aus jahrzehntelanger High-End Audioproduktion und modernster KI-Technologie ("Traditional Excellence meets AI Efficiency").

* Sektions-Mapping: Bestimme die notwendigen Landingpage-Sektionen basierend auf der Hierarchie im Diagramm image.png

* Recherchiere & Extrahiere: Besuche [https://www.sound-archive.com/impressum](https://www.sound-archive.com/impressum) für die rechtlichen Daten


### Schritt 2: 
*   Halte Rückfragen zum Nutzer über das Thema und deine Vorschläge nach der Recherchere 
*   Halte Rückfragen zum Nutzer, wie das Desing letztendlich aussehen soll, orientiere dich beim Design https://sites.google.com/view/polysounds an dieser Seite und an den Logos. 
*   Nutze dabei das Tool AskUserQuestion

### Schritt 3: Verzeichnisstruktur anlegen
Erstelle virtuell (oder als Datei-Output) folgende Ordnerstruktur:
*   `/sections/` (Inhaltliche Blöcke der Website)
*   `/legal/` (Rechtliche Pflichtseiten)
*   `claude.md` (Die zentrale "Bau-Anleitung" für die Website)

### Schritt 4: Content-Generierung (Markdown-Dateien)
Befülle den Ordner `/sections/` mit spezifischen Dateien. Jede Datei muss hochwertigen, verkaufspsychologisch optimierten Text enthalten:
*   `01_hero.md`: Catchy Headline, Subline, CTA-Button.
*   `02_problem.md`: Agitierung der Schmerzpunkte der Zielgruppe.
*   `03_solution.md`: Vorstellung der Lösung (z.B. RAG-Systeme).
*   `04_features.md`: Technische Highlights und USPs.
*   `05_services.md`: Konkrete Dienstleistungs-Pakete.
*   `06_faq.md`: Einwandvorbehandlung.
*   `07_contact.md`: Kontakt-Sektion.
*   Mit dem mcp-img-aoffice kannst du Bilder erstellen, halte dabei Rückfragen an den Nutzer, wo du entschieden hast Bilder und was für Bilder generiert werden sollen, ob es den Vorstellungen entspricht mit dem AskUserQuestion

Befülle `/legal/`:
*   `impressum.md`: Strukturierte Platzhalter für rechtliche Angaben.
*   `datenschutz.md`: Spezifische Datenschutzhinweise (z.B. Umgang mit Firmendaten bei KI).

### Schritt 5: Master-Datei `claude.md` erstellen
Schreibe eine neue `claude.md`, die als System-Prompt für die spätere Programmierung dient. Sie muss enthalten:
*   **Tech-Stack :** statische Website, html, css, js Datein. 
*   **Design-System:** Farbpalette, Typografie-Vorgaben, Abstände.
*   **Komponenten-Logik:** Wie die Markdown-Dateien in Code-Komponenten gerendert werden sollen.

* Schreibe in die Master Datei, das coole Komponenten für die HeroSection, welceh etwas mit SOund wiederspiegeln mithilfe der shadcn Mcp Service gesucht werden sollen

---
