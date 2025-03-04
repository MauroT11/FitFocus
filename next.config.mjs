/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ['your-supabase-storage-domain.supabase.co'], // Replace with your actual domain
      remotePatterns: [
        {
          protocol: 'https',
          hostname: '**',
        },
      ],
    },
  }
  
export default nextConfig;