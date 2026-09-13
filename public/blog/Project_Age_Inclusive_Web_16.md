# The Age-Inclusive Web Standard (AIWS)

**Repo:** [github.com/Efury1/Age-Inclusive-Web](https://github.com/Efury1/Age-Inclusive-Web)
**Site:** [ageinclusiveweb.netlify.app](https://ageinclusiveweb.netlify.app)

## What it is

An open-source accessibility standard for designing digital public services that actually work for older adults. It grew out of a Socitm workshop on older adults in Norfolk, UK, and is built by Team Elevate, a cross-council group: Eliza (Norfolk County Council), Bethany Lloyd (London Borough of Barnet), Emma Toublic (Essex County Council), Holly Plumb (Norfolk County Council), and Hoda Younis (London Borough of Hounslow).

The audience is public sector and council teams. The goal is guidance that's evidence-grounded and actually actionable, not just a checklist to tick off, and a site that models its own principles rather than just describing them.

## What it contains

Two main outputs:

1. **A set of guidelines**, each coded AIWS-XX, structured as JS objects with an id, category, title, WCAG overlap, body, and references
2. **A Docusaurus site** presenting the guidelines with an interactive checklist

Guidelines completed so far:

| Code | Topic |
|------|-------|
| AIWS-01 | Navigation and hamburger menus |
| AIWS-02 | Device flexibility |
| AIWS-03 | Time limits and session pacing |
| AIWS-05 | Interruption management and form behaviour |

References draw on Age UK reports, Socitm, WCAG, Frontiers in Psychology, Nielsen Norman Group, and Pew Research Center.

## The site itself

Built with Docusaurus, React/JSX, and CSS Modules, deployed via Netlify (also works on Vercel or GitHub Pages). Core pages: homepage, About, a blog-style Research Overview, and Contribute.

A few details worth noting:

- The **Contribute** page has toggleable sections for developers, councils, and researchers, using an accessible accordion pattern (`aria-expanded`, `aria-controls`, animated chevrons)
- The **contact form** is wired to Formspree, with validation, draft persistence, a progress bar, tooltips, and inline field errors
- The **homepage** layers a Canva-inspired visual style (purple gradient hero, white lifted cards, Inter font, pill tags, 12px border-radius) on top of a GOV.UK-style structural backbone
- Accessibility checks were done with Windows Narrator and NVDA

## Presented at

Socitm, with accompanying training materials and user research survey designs.