# Personal Portfolio – Parsa Naderi

> A fast, accessible, single‑page portfolio built with HTML, CSS, and JavaScript.

This site showcases my profile, skills, experience, projects, and contact information. The project focuses on clean semantics, responsive layout, strong accessibility defaults, and simple deployment (e.g., GitHub Pages).


## Features

- Accessible, keyboard‑friendly navigation with an ARIA‑enabled hamburger menu
- Centered navbar links (logo hidden by design)
- Mobile menu closes on link click and supports Enter/Space/Escape
- Smooth scrolling with automatic opt‑out for users that prefer reduced motion
- Optimized hero section (larger avatar and headings, low CLS via fixed image size)
- Secure external links (`rel="noopener noreferrer"` on `target="_blank"`)
- SEO basics: page title, meta description, Open Graph tags
- Minimal dark theme with subtle accent color


## Tech stack

- HTML5 (semantic sections, landmarks)
- CSS3 (flexbox, media queries)
- Vanilla JavaScript (no dependencies)


## Project structure

```text
personal-portfolio/
├─ assets/
│  ├─ CV.pdf
│  └─ image.JPG          # Profile photo used on the hero section
├─ index.html             # Single-page markup
├─ style.css              # Global styles, layout, components, responsive rules
├─ script.js              # Navbar toggle + a11y behavior
└─ README.md
```