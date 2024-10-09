/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
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
