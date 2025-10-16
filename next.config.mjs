import createMDX from '@next/mdx';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  output: 'export',
  images: { unoptimized: true }, // static export
};

export default createMDX({
  extension: /\.mdx?$/,
})(nextConfig);
