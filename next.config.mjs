import createMDX from '@next/mdx';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
    output: 'export', // enables static export
  images: { unoptimized: true }, // prevents Next image optimization (needs server)
  basePath: '', // keep empty for personal site, or '/repo-name' for project site
  assetPrefix: '', // same rule as above
};

const withMDX = createMDX({
  extension: /\.mdx?$/,
});

export default withMDX(nextConfig);
