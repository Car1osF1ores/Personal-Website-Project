# Personal Website

My personal portfolio website, built with React and hosted on GitHub Pages.

**Live site:** https://car1osf1ores.github.io/Personal-Website-Project

## Running locally

All commands run from this folder (`Personal-Website-Project/`, the one with `package.json`).

```
npm install   # first time only
npm start     # opens http://localhost:3000
```

The dev server reloads automatically as you edit files in `src/`.

## Updating the live site

1. Make changes on the `v2` branch and check them with `npm start`.
2. Deploy:
   ```
   npm run deploy
   ```
3. Commit and push `v2` to save the source code.

Changes can take a minute or two to appear online. Use a hard refresh (Ctrl+Shift+R) if you still see the old version.

> `npm run deploy` publishes whatever is in this folder **right now**, whether or not it is committed and regardless of which branch is checked out. Make sure the site looks right locally first.

## How deployment works

The project uses two kinds of branches:

| Branch | Contains | Updated by |
| --- | --- | --- |
| `main`, `v2` | Source code (`src/`, `public/`, `package.json`) | Normal commits and pushes |
| `gh-pages` | The built site that GitHub Pages serves | `npm run deploy` only |

When you run `npm run deploy`:

1. **`predeploy`** runs first. It runs `npm run build`, which compiles the app into the `build/` folder, then copies `build/index.html` to `build/404.html` (see below).
2. **`deploy`** runs `gh-pages -d build`, which pushes the contents of `build/` to the `gh-pages` branch on GitHub. The branch is created automatically on the first deploy.
3. GitHub Pages sees the new `gh-pages` commit and republishes the site.

Pushing to `main` or `v2` does **not** change the live site. Never edit `gh-pages` by hand; it is overwritten on every deploy. The `build/` folder is gitignored and should not be committed.

### GitHub Pages settings

In the repo on GitHub: **Settings → Pages → Build and deployment**

- Source: **Deploy from a branch**
- Branch: **`gh-pages`**, folder **`/ (root)`**

This only needs to be set once.

### Why the site works under `/Personal-Website-Project`

GitHub Pages serves this site from a subfolder, not the root of the domain. A few things handle that:

- **`homepage` in `package.json`** tells the build that the site lives at `/Personal-Website-Project/`, so JS, CSS, and images load from the right place.
- **`<BrowserRouter basename={process.env.PUBLIC_URL}>`** in `src/index.js` makes routes like `/about` resolve to `/Personal-Website-Project/about`.
- **Files in `public/`** (like the resume PDF) must be linked with `process.env.PUBLIC_URL`, for example:
  ```jsx
  <a href={`${process.env.PUBLIC_URL}/Carlos_Flores_Resume__FullStackDeveloper.pdf`}>
  ```
  A plain `href="/file.pdf"` points to the domain root and will 404 on the live site. Images imported in JS (`import pic from "./assets/..."`) don't need this.

### Why there is a `404.html`

GitHub Pages only knows about real files. Visiting or refreshing a page like `/Personal-Website-Project/about` would normally return GitHub's 404 page, because there is no `about` file. Copying `index.html` to `404.html` makes GitHub serve the React app for any unknown path, and React Router then shows the correct page.

## Project structure

```
public/          Static files copied as-is (index.html, resume PDF, favicon)
src/
  pages/         Full pages (Home, About, Projects, Contact)
  components/    Reusable pieces (Navbar, ProjectCard, ContactForm, ...)
  data/          Text and project content used by the pages
  css/           Stylesheets
  hooks/         Custom React hooks
  assets/        Images, icons, and video
```
