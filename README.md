# Navin Karthik R — Portfolio

Personal portfolio: a single static page (`index.html` + `assets/`), no build step.
Built on the Unifex HTML template (home 3 layout) with jQuery, GSAP 3.15
(ScrollSmoother, ScrollTrigger, SplitText), AOS and PureCounter, all self-hosted.

## Run locally

```bash
python3 -m http.server 8080
# open http://localhost:8080
```

## Deploy

- **Vercel:** the project is linked to this repo; every push to `main` deploys to production.
- **GitHub Pages:** Settings → Pages → *Deploy from a branch* → `main` / root, served at
  `https://navinkarthik-r.github.io/Portfolio-/`.

## Editing

- Text and links: `index.html` (sections: hero, about, skills, projects, achievements, education, contact).
- Images: `assets/images/`. The hero photo is a background-removed cut-out (`navin-cutout.webp`).
- Resume: replace `Navin_Karthik_R_Resume.pdf` (linked from "Download CV").
- The contact form posts to [FormSubmit](https://formsubmit.co), which emails each message to
  `navinkarthik26@gmail.com` (the `data-to` attribute on the form). The very first submission only sends an
  "Activate Form" email to that inbox; click it once and every later message is delivered.
