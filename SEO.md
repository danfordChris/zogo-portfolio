# SEO & AI Discoverability — danfordchris.dev

Goal: when people search **"Danford Chris"** / **"danfordchris"** (and when AI
assistants are asked about you), they find this portfolio, a way to contact you,
and your products (e.g. ContentLab). This file is the runbook + status.

Canonical domain: **https://danfordchris.dev**

---

## ✅ Phase 0 — Foundation (done)

| File | Purpose |
|------|---------|
| `index.html` (head) | Title, meta description, keywords, canonical, Open Graph + Twitter cards, **JSON-LD** (`Person` + `WebSite` + `ProfilePage`, with `alternateName` = "Danford Chris"/"danfordchris" and `sameAs` socials) |
| `public/llms.txt` | Identity/skills/projects/links for AI agents (ChatGPT, Claude, Perplexity, Gemini) |
| `public/robots.txt` | Allows all crawlers, explicitly welcomes AI bots, points to sitemap |
| `public/sitemap.xml` | Submitted to Google Search Console |
| `public/og-image.jpg` | Link-preview / knowledge-panel image (from avatar) |

## ✅ Phase 1 — Crawlable without JavaScript (done)

This is a **client-rendered Vite SPA**, so the raw HTML had no content — a problem
for AI crawlers (GPTBot/ClaudeBot/PerplexityBot **don't run JS**) and for fast,
reliable Google indexing.

Fix shipped: a **static, semantic content shell inside `#root`** in `index.html`
(name, roles, bio, expertise, experience, products, projects, contact + links).
React replaces it on mount for real users; no-JS crawlers read the full content.

> **Keep the shell in sync** when your bio/roles/projects change materially.

### Optional upgrade (higher fidelity, more effort)
If you want crawlers to see the *fully designed* page (not just the shell):
- **`react-snap`** — snapshot routes to static HTML at build (`hydrateRoot` in `main.tsx`); or
- **Migrate to Next.js App Router** — true SSR/SSG + per-route `metadata`. Best long-term; biggest change. Recommended only if you also add real routes (below).

## ✅ Phase 2 — Entity & authority signals (done)

- `ItemList` of projects (`SoftwareApplication`/`WebApplication`) + `BreadcrumbList` JSON-LD in `index.html` → richer results & sitelink hints.
- Visible **ContentLab** cross-link added to the footer.
- `sameAs` graph ties GitHub / LinkedIn / X / Instagram / ContentLab to your Person entity.

### Off-page (do this manually — high impact for your name)
- [ ] GitHub profile → set website to `https://danfordchris.dev`.
- [ ] LinkedIn → add `danfordchris.dev` to Contact info / featured links.
- [ ] X bio → link `danfordchris.dev`.
- [ ] Google Play developer page → link site.
- [ ] Use the **same name spelling** everywhere ("Danford Chriss") so Google merges the entity.

## ✅ Phase 3 — Performance & media (partial)

- [x] `loading="lazy" decoding="async"` on project images; descriptive `alt`.
- [x] OG image present.
- [ ] **Custom 1200×630 OG card** (name + title + photo) — current image is the portrait avatar, center-cropped by social platforms. Nice-to-have.
- [ ] **Code-split** heavy libs (MUI, framer-motion, gsap, slick) with `React.lazy` to improve Core Web Vitals / LCP.
- [ ] **Blog / writing section** (4–6 posts) — fresh, keyword-rich content sustains ranking and gives AI crawlers more to cite. Needs routing (see Phase 1 upgrade) or a static generator.

## ⚠️ Live infrastructure findings (Cloudflare in front of Vercel)

Discovered after first deploy — **these are dashboard fixes, not code:**

1. **Cloudflare hard-blocks AI bots (403).** GPTBot / ClaudeBot / PerplexityBot
   get `HTTP 403`; normal browsers get `200`. This defeats AI discoverability
   regardless of `llms.txt`/meta tags.
   → Cloudflare → **Security → Bots** (and/or **AI Crawl Control**): turn OFF
   "Block AI bots", or allow PerplexityBot / ChatGPT-User / OAI-SearchBot /
   ClaudeBot / Claude-Web.
2. **Managed robots.txt overrides `public/robots.txt`.** Cloudflare serves a
   "content signals" robots with `ai-train=no` and Disallow for the AI bots.
   → Disable the managed robots.txt (so our file serves) or set `ai-input=yes`.
   (`search=yes` is already on, so Google indexing is unaffected.)
3. **Canonical = apex (decided).** Site currently 308-redirects
   `danfordchris.dev → www.danfordchris.dev`, but our tags use the apex.
   → Make **`danfordchris.dev` the PRIMARY domain** (Vercel → Project → Settings
   → Domains → set apex primary) so the redirect flips to `www → apex`. No repo
   change needed.

## 🔜 Phase 4 — Submit, measure, iterate (action required)

### 1. Google Search Console (REQUIRED)
1. Go to https://search.google.com/search-console → **Add property** → `https://danfordchris.dev`.
2. **HTML tag** method → copy the token → paste into `index.html`:
   `<meta name="google-site-verification" content="REPLACE_WITH_YOUR_GSC_TOKEN" />`
   → redeploy → click **Verify**.
   *(Alternative: drop the `google<token>.html` file GSC gives you into `/public`.)*
3. **Sitemaps** → submit `sitemap.xml`.
4. **URL Inspection** → enter `https://danfordchris.dev/` → **Request indexing**.

### 2. Bing Webmaster Tools
- https://www.bing.com/webmasters → add site (can import from GSC) → submit sitemap.
- Bing powers ChatGPT search, so this also helps AI discoverability.

### 3. Monitor (weekly at first)
- GSC → Performance → filter queries containing `danford` → track position/impressions/clicks.
- Incognito-search "Danford Chris", "danfordchris", "Danford Chriss developer".
- Ask ChatGPT/Claude/Perplexity "Who is Danford Chris?" and check they cite your site.

---

## ContentLab subdomain (separate project/host)

`contentlab.danfordchris.dev` is a different deploy and needs its **own** files.
Ready-to-use copies are in **`seo-assets/contentlab/`** — drop them into that
project's `public/` (or web root):

- `llms.txt`, `robots.txt`, `sitemap.xml`

Then in ContentLab's `<head>` add: a canonical tag, OG tags, and JSON-LD
`WebApplication` with `"author"` pointing to the Person `@id`
`https://danfordchris.dev/#person`. Add `contentlab.danfordchris.dev` as a
separate property in Search Console and submit its sitemap.

---

## Why no full router / Next.js migration here?
This is a single-page scroll portfolio. Ranking #1 for **your own name** does not
require separate routes — the static head metadata, JSON-LD, and crawlable shell
cover it. Real routes (`/projects/ipf-os`, `/blog/...`) mainly help long-tail
queries and richer sitelinks; revisit them with the Next.js path if/when you add a
blog. Tracked above as optional upgrades, not blockers.
