/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "www.svgrepo.com",
        protocol: "https",
      },
      {
        hostname: "docs.pmnd.rs",
        protocol: "https",
      },
    ],
  },
};

export default nextConfig;
