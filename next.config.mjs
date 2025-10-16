import createMDX from '@next/mdx';

// 🔑 IMPORTANT: Get your repository name here
const REPO_NAME = 'personal-portfolio'; 

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  output: 'export', 
  images: { unoptimized: true }, // Keep this for static export

  // 🛠️ THE FIX FOR GITHUB PAGES SUBDIRECTORY HOSTING
  // 1. basePath: Used for Next.js routing/linking (e.g., <Link href="/about"/>)
  basePath: `/${REPO_NAME}`,
  
  // 2. assetPrefix: Used for all static assets (CSS, JS, images, etc.)
  assetPrefix: `/${REPO_NAME}/`,
};

const withMDX = createMDX({
  extension: /\.mdx?$/,
});

export default withMDX(nextConfig);