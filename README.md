# Evan's Notebook

A small personal site where I write plain-language explainers about AI, digital
safety, and other technical topics, plus context on current events, for friends
and family who don't work in tech.

It's a static site built with [Hugo](https://gohugo.io/). There's no database,
no tracking, no cookies, and only one tiny script (for copying my email address).
Articles are Markdown files.

The site opts out of AI training and scraping: `robots.txt` disallows known AI
crawlers, every page carries `noai` / `tdm-reservation` tags, and
`/.well-known/tdmrep.json` declares a text-and-data-mining opt-out. The crawler
list and the on/off switch (`blockAI`) are in `hugo.toml`.

## Running it locally

1. Install Hugo 0.132 or newer (extended edition not required):
   - Fedora: `sudo dnf install hugo`
   - macOS: `brew install hugo`
   - Ubuntu/Debian: `sudo snap install hugo`, or grab a `.deb` from the
     [releases page](https://github.com/gohugoio/hugo/releases)
2. From the project folder, start the preview server:
   ```bash
   hugo server -D
   ```
3. Open <http://localhost:1313>. The page reloads when you save a file. `-D`
   includes posts marked `draft: true`.

To build the finished site into `public/` without starting a server, run `hugo --minify`.

## Writing a post

```bash
hugo new content education/my-post.md
```

Edit the new file, change `draft: true` to `draft: false`, and push. Each folder
in `content/` is a tab on the site. Math goes between `$...$` or `$$...$$`.

## Layout

```
content/                 The writing
  _index.md              Home page intro
  about.md               About page
  education/             One folder per tab
    _index.md            The tab's title, menu order, and intro text
    *.md                 Articles
  current-events/
layouts/                 HTML templates
  _default/              Page shells: base, list (tab pages), single (articles)
  _default/_markup/      How Markdown images, links, and math are rendered
  partials/              Header, footer, post lists, bylines
  index.html             Home page
assets/
  css/style.css          All styling; colors and type sizes are at the top
  js/contact.js          "Contact me" link that copies my email
static/                  Files served as-is (favicon)
archetypes/default.md    Template for new posts
hugo.toml                Site settings
.github/workflows/       Builds and publishes to GitHub Pages on every push
deploy/Caddyfile         Optional: web server config for self-hosting
deploy.sh                Optional: build and upload to a self-hosted server
```

## Publishing

Pushing to `main` runs `.github/workflows/hugo.yml`. It builds the site with Hugo
and deploys it to GitHub Pages. In the repository settings, go to
**Settings → Pages → Source** and choose **GitHub Actions** (this only has to be
done once).

---

Writing © Evan Economou. All rights reserved.
