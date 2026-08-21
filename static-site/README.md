# CATDE Foundation — standalone HTML/CSS/JS site

A plain static version of the site. No build step, no framework, no dependencies.
Upload the whole `static-site/` folder to any web host (cPanel, Netlify, S3,
GitHub Pages, WordPress hosting, etc.) and it works.

## Structure

```
static-site/
├── index.html        Homepage (full-screen interactive hero)
├── about.html        About Us
├── projects.html     Projects (Gory Retreat, Jam Fruit Tree Literary House)
├── contact.html      Contact
├── css/styles.css    All styling (design tokens at the top of the file)
├── js/main.js        Header, mobile nav, scroll reveals, petals, parallax, copy-email
└── assets/           logo, flower mark, favicon, photographs
```

## Viewing locally

Open `index.html` directly in a browser, or serve the folder:

```
cd static-site
python3 -m http.server 8000   # then visit http://localhost:8000
```

## Navigation

Every page shares the same header (About Us / Projects / Contact), mobile
menu and footer. The current page is highlighted automatically by `js/main.js`.
Homepage project cards deep-link into `projects.html#gory-artistic-retreat`
and `projects.html#jam-fruit-tree-literary-house`.

## Editing content

- Text: edit directly in the relevant `.html` file.
- Colours, fonts, spacing: edit the `:root` variables at the top of
  `css/styles.css` — `--marigold`, `--ink`, `--paper`, `--serif`, `--sans`.
- Images: replace files in `assets/` keeping the same filenames.

## Notes

- Fonts load from Google Fonts (Cormorant Garamond + Karla). If the site must
  work offline, download the font files and swap the `<link>` for a local
  `@font-face` block.
- Animations respect `prefers-reduced-motion`.
- Update the `<link rel="canonical">` URLs if you host on a different domain.

## Journal templates (list + single view)

- `journal.html` — list view: one featured entry (`.post-featured`) plus a
  responsive card grid (`.post-grid` / `.post-card`). To add an entry, copy an
  `<article class="post-card">` block and swap date, place, title, excerpt,
  image and link.
- `journal-gory-manor-house.html`, `journal-jam-fruit-tree.html`,
  `journal-founding.html` — single view template. Copy one to
  `journal-<slug>.html`, then update the `<title>`, meta description,
  og tags, canonical URL, hero eyebrow/date/place, `.article-figure` image and
  caption, `.article-body` content, tags and prev/next links — then add a
  matching card to `journal.html`.

Inside `.article-body` you can use paragraphs, `h2` section headings,
`blockquote` pull-quotes and `ul` lists with marigold bullet markers.
