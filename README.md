# Navin Karthik R — Portfolio

Personal portfolio: a single static page (`index.html` + `assets/`), no build step.
Built on the Unifex HTML template (home 3 layout) with jQuery, GSAP 3.15
(ScrollSmoother, ScrollTrigger, SplitText), AOS and PureCounter, all self-hosted.

## Run locally

```bash
python3 -m http.server 8080
# open http://localhost:8080
```

## Deploy (GitHub Pages)

Settings → Pages → Source: *Deploy from a branch* → `main` / `root`.
The site is then served at `https://navinkarthik-r.github.io/Portfolio-/`.

## Editing

- Text and links: `index.html` (sections: hero, about, skills, projects, achievements, education, contact).
- Images: `assets/images/`. The hero photo is a background-removed cut-out (`navin-cutout.webp`).
- Resume: replace `Navin_Karthik_R_Resume.pdf` (linked from "Download CV").
- The contact form has no backend: it opens the visitor's mail app with the message pre-filled.
