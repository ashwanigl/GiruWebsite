# Quick Start: Deploy to GitHub Pages

## 1. Enable GitHub Pages

1. Go to https://github.com/ashwanigl/GiruWebsite/settings/pages
2. Under **Source**, select: **GitHub Actions**
3. Click **Save**

## 2. Commit and Push

```bash
# Add all changes
git add .

# Commit
git commit -m "Setup GitHub Pages deployment with Cloudflare support"

# Push to trigger deployment
git push
```

## 3. Wait for Deployment

- Go to the **Actions** tab: https://github.com/ashwanigl/GiruWebsite/actions
- Watch the deployment progress
- Once complete, your site will be live!

## 4. Your Site is Live! 🎉

**Default URL**: https://ashwanigl.github.io/GiruWebsite/

## Optional: Add Custom Domain

Want to use `www.giru.ai` instead? Follow these steps:

### A. Update Code

```bash
# 1. Add custom domain
mv client/public/CNAME.example client/public/CNAME
echo "www.giru.ai" > client/public/CNAME

# 2. Update base path in vite.config.ts
# Change line 10 from:
#   base: process.env.GITHUB_PAGES ? '/GiruWebsite/' : '/',
# To:
#   base: '/',

# 3. Commit and push
git add .
git commit -m "Add custom domain"
git push
```

### B. Configure Cloudflare

1. Log in to Cloudflare
2. Select your domain (giru.ai)
3. Go to **DNS** → **Records**
4. Add CNAME record:
   - **Name**: `www`
   - **Target**: `ashwanigl.github.io`
   - **Proxy**: ✅ Proxied (orange cloud)

### C. Configure GitHub

1. Go to Settings → Pages
2. Under **Custom domain**, enter: `www.giru.ai`
3. Wait for DNS check to pass
4. Enable **Enforce HTTPS**

### Done! 🚀

Your site will be live at: https://www.giru.ai

---

For detailed instructions, see [DEPLOYMENT.md](./DEPLOYMENT.md)
