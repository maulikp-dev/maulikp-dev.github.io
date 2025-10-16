import createMDX from '@next/mdx';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  output: 'export', // 🔑 KEEP THIS: Enables static HTML export
  images: { unoptimized: true }, // KEEP THIS: Disables Image Optimization which needs a server
  basePath: '', // keep empty for personal site, or '/repo-name' for project site
  assetPrefix: '', // same rule as above
};

const withMDX = createMDX({
  extension: /\.mdx?$/,
});

export default withMDX(nextConfig);