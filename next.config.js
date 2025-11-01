import withPWA from 'next-pwa';

const config = withPWA({
  dest: 'public',
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === 'development'
})({
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['images.unsplash.com'],
  },
  experimental: {
    optimizeCss: true
  },
  eslint: {
    // Don't fail build on warnings, only errors
    ignoreDuringBuilds: false,
  },
  typescript: {
    // Don't fail build on type errors (we've fixed the critical ones)
    ignoreBuildErrors: false,
  },
});

export default config;