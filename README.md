# Evan's Notebook

A small personal site where I write plain-language explainers about AI, digital
safety, and other technical topics, plus context on current events, for friends
and family who don't work in tech.

It's a static site built with [Hugo](https://gohugo.io/). There's no database,
no tracking, no cookies, and only two tiny scripts (one copies my email address,
the other runs the tag filter on tab pages).
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

To tag a post, add `tags: ["AI learning series"]` (one or more) to its front
matter. Tags show under the post in every list and on the post itself, and a
"Show" dropdown appears on a tab as soon as any post in it has a tag.

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
  js/tag-filter.js       Tag dropdown on tab pages
static/                  Files served as-is (favicon, Cloudflare _headers)
archetypes/default.md    Template for new posts
hugo.toml                Site settings
build.sh                 Cloudflare build step (downloads Hugo, builds the site)
wrangler.jsonc           Cloudflare Worker settings
deploy/Caddyfile         Optional: web server config for self-hosting
deploy.sh                Optional: build and upload to a self-hosted server
```

## Publishing

The site is hosted on Cloudflare as a Worker with no code. It just serves the
files Hugo builds into `public/`. The Worker is connected to this GitHub
repository, so every push to `main` builds and publishes the site, and a push
to any other branch uploads a preview version with its own URL.

Worker settings (**Workers & Pages → the Worker → Settings → Build**):

| Setting           | Value                                     |
|-------------------|-------------------------------------------|
| Build command     | `./build.sh`                              |
| Deploy command    | `npx wrangler deploy`                     |
| Preview command   | `npx wrangler preview`                    |

The site lives at <https://evaneconomou.com/> (set as `baseURL` in `hugo.toml`).
`build.sh` downloads a fixed Hugo version (`HUGO_VERSION`, 0.169.0 by default)
and builds the site. A `BASE_URL` build variable, if set, overrides `baseURL`. `wrangler.jsonc` tells Cloudflare to serve `public/` and to
use `404.html` for missing pages. Its `name` must match the Worker's name in the
dashboard. Response headers (security headers, caching) are set in
`static/_headers`.

---

Writing © Evan Economou. All rights reserved.
