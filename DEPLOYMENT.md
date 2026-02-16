# Deployment Guide: GitHub Pages + Cloudflare

This guide explains how to deploy the Giru.ai website to GitHub Pages with Cloudflare as the CDN/DNS provider.

## Quick Start

The repository is already configured for GitHub Pages deployment. Follow these steps:

### 1. Enable GitHub Pages

1. Go to your repository on GitHub: `https://github.com/ashwanigl/GiruWebsite`
2. Navigate to **Settings** → **Pages**
3. Under **Source**, select **GitHub Actions** (not "Deploy from a branch")
4. Click **Save**

### 2. Initial Deployment

The GitHub Actions workflow will automatically deploy when you push to the `main` branch.

To trigger a manual deployment:
1. Go to **Actions** tab in your repository
2. Select the **Deploy to GitHub Pages** workflow
3. Click **Run workflow** → **Run workflow**

After deployment completes, your site will be available at:
- **GitHub Pages URL**: `https://ashwanigl.github.io/GiruWebsite/`

### 3. Custom Domain Setup (Optional)

If you want to use a custom domain like `giru.ai` or `www.giru.ai`:

#### A. Configure GitHub Pages

1. Rename `client/public/CNAME.example` to `client/public/CNAME`
2. Edit the file and add your domain (e.g., `www.giru.ai`)
3. Commit and push:
   ```bash
   git add client/public/CNAME
   git commit -m "Add custom domain"
   git push
   ```

#### B. Configure Cloudflare DNS

1. Log in to your Cloudflare dashboard
2. Select your domain
3. Go to **DNS** → **Records**
4. Add a CNAME record:
   - **Type**: CNAME
   - **Name**: `www` (or `@` for apex domain)
   - **Target**: `ashwanigl.github.io`
   - **Proxy status**: Proxied (orange cloud icon)
   - **TTL**: Auto
5. Click **Save**

#### C. Configure GitHub Pages Custom Domain

1. Go to **Settings** → **Pages** in your GitHub repository
2. Under **Custom domain**, enter your domain (e.g., `www.giru.ai`)
3. Wait for DNS check to complete
4. Enable **Enforce HTTPS**

#### D. Update Vite Config for Custom Domain

Edit `vite.config.ts` and change the base path:

```typescript
// Change this line:
base: process.env.GITHUB_PAGES ? '/GiruWebsite/' : '/',

// To this (for custom domain):
base: '/',
```

Commit and push the change.

### 4. Cloudflare Optimization Settings

For best performance, configure these Cloudflare settings:

#### SSL/TLS
- **SSL/TLS encryption mode**: Full (strict)
- **Always Use HTTPS**: On
- **Automatic HTTPS Rewrites**: On

#### Speed → Optimization
- **Auto Minify**: Enable HTML, CSS, JavaScript
- **Brotli**: On
- **Rocket Loader**: Off (can interfere with React)

#### Caching
- **Caching Level**: Standard
- **Browser Cache TTL**: 4 hours (or as preferred)

#### Network
- **HTTP/2**: On
- **HTTP/3 (with QUIC)**: On
- **0-RTT Connection Resumption**: On

#### Page Rules (Optional)
Add a page rule for your domain to cache everything:
- URL: `www.giru.ai/*`
- Settings: Cache Level = Cache Everything, Edge Cache TTL = 2 hours

## Build Configuration

### Build Scripts

- **Development**: `npm run dev` or `npm run dev:client`
- **Production Build**: `npm run build:static`
- **Preview Build**: `npm run preview`
- **Full Stack Build**: `npm run build` (includes server)

### Build Output

The static site is built to `dist/public/` and includes:
- Optimized React application
- Minified CSS and JavaScript
- Assets from `attached_assets/` (logos, images)
- `.nojekyll` file (prevents Jekyll processing)
- `404.html` (for SPA routing)

## Troubleshooting

### Assets not loading
- Ensure the `base` path in `vite.config.ts` matches your deployment URL
- For subdirectory deployment: use `/GiruWebsite/`
- For custom domain: use `/`

### 404 errors on page refresh
- The `404.html` file should handle SPA routing automatically
- Verify it exists in `client/public/` and is included in the build

### Cloudflare showing old content
- Purge Cloudflare cache: **Caching** → **Purge Everything**
- Or use **Development Mode** temporarily

### Workflow fails
- Check **Actions** tab for error details
- Ensure GitHub Pages is enabled with "GitHub Actions" as source
- Verify Node.js version compatibility (currently set to v20)

## Deployment Workflow Details

The GitHub Actions workflow (`.github/workflows/deploy.yml`) performs:

1. **Build Job**:
   - Checks out code
   - Sets up Node.js 20
   - Installs dependencies (`npm ci`)
   - Builds static site (`npm run build:static`)
   - Uploads build artifacts

2. **Deploy Job**:
   - Deploys artifacts to GitHub Pages
   - Runs after successful build

## Additional Resources

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Cloudflare Pages Documentation](https://developers.cloudflare.com/pages/)
- [Vite Static Deploy Guide](https://vitejs.dev/guide/static-deploy.html)

## Support

For issues or questions:
- Check the [GitHub Issues](https://github.com/ashwanigl/GiruWebsite/issues)
- Review GitHub Actions logs in the **Actions** tab
- Verify Cloudflare DNS settings in the dashboard
