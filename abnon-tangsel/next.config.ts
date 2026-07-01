import type { NextConfig } from 'next';

/**
 * Next.js Configuration for Static Export
 * 
 * This configuration enables static site generation (SSG) with the following characteristics:
 * - All pages are pre-rendered at build time
 * - No server-side runtime required (suitable for CDN deployment)
 * - Image optimization is disabled (images served as-is)
 * - Trailing slashes added for compatibility with static hosting
 * 
 * Trade-offs:
 * ✅ Faster page loads (pre-rendered)
 * ✅ Lower hosting costs (no server needed)
 * ✅ Better SEO (pre-rendered HTML)
 * ❌ No Server Actions
 * ❌ No API Routes
 * ❌ No Dynamic Rendering (ISR/SSR)
 * ❌ No Middleware
 * ❌ No Image Optimization
 */
const nextConfig: NextConfig = {
  output: 'export',
  distDir: 'dist',
  
  // Image optimization is not supported with static export
  images: {
    unoptimized: true,
  },
  
  // Add trailing slashes for better compatibility with static hosting
  trailingSlash: true,
  
  // Enable React strict mode for better development experience
  reactStrictMode: true,
  
  // Performance optimizations
  compress: true,
  
  // TypeScript configuration
  typescript: {
    // Fail build on type errors
    ignoreBuildErrors: false,
  },
  
  // Experimental features (Next.js 16+)
  experimental: {
    // Optimize package imports for better tree-shaking
    optimizePackageImports: [
      'lucide-react',
      'framer-motion',
      '@radix-ui/react-slot',
    ],
    
    // Enable Turbopack for faster builds (Next.js 16+)
    // turbo: {}, // Uncomment when ready for production
  },
};

export default nextConfig;
