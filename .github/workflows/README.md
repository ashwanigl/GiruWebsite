# GitHub Pages Deployment

This workflow automatically deploys the website to GitHub Pages when you push to the `main` branch.

## Setup Instructions

### 1. Enable GitHub Pages in Repository Settings

1. Go to your repository on GitHub
2. Click on **Settings** → **Pages**
3. Under **Source**, select **GitHub Actions**

### 2. Configure Custom Domain (Optional - for Cloudflare)

If you want to use a custom domain with Cloudflare:

1. Rename `client/public/CNAME.example` to `client/public/CNAME`
2. Add your domain name to the CNAME file (e.g., `www.giru.ai`)
3. In Cloudflare DNS settings, add a CNAME record:
   - Type: `CNAME`
   - Name: `www` (or `@` for apex domain)
   - Target: `<your-username>.github.io`
   - Proxy status: **Proxied** (orange cloud)
4. Commit and push the CNAME file

### 3. Repository Base Path

The site is configured to work with both:
- Custom domain (e.g., `www.giru.ai`) - uses `/` as base
- GitHub Pages subdirectory (e.g., `username.github.io/repo-name`) - uses `/repo-name/` as base

To change the base path, edit `vite.config.ts` and set the `base` option.

### 4. Cloudflare Configuration

For optimal performance with Cloudflare:

1. **SSL/TLS**: Set to "Full" or "Full (strict)"
2. **Always Use HTTPS**: Enable
3. **Auto Minify**: Enable for HTML, CSS, and JavaScript
4. **Brotli**: Enable
5. **HTTP/2**: Enable (should be on by default)
6. **Rocket Loader**: Optional (test for compatibility)

### 5. Deployment

The site will automatically deploy when you:
- Push to the `main` branch
- Manually trigger the workflow from the Actions tab

Build artifacts are created in `dist/public` and deployed to GitHub Pages.
