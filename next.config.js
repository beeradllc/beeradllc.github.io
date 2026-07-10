/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export for GitHub Pages deployment.
  // NOTE: The contact form API route (app/api/contact) requires a Node.js
  // server runtime and will not function in the static export. When deployed
  // to GitHub Pages the form falls back to a mailto link. To enable the full
  // email API, deploy to a platform that supports Next.js server features
  // (e.g. Vercel) and remove the `output: 'export'` line.
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
