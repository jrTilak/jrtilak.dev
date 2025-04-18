import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  /* config options here */
  images: {
    qualities: [100],
    loader: "custom",
    imageSizes: [48, 96, 128, 384],
    deviceSizes: [640, 750, 1200, 1920],
    remotePatterns: [
      {
        hostname: "www.svgrepo.com",
        protocol: "https",
      },
      {
        hostname: "docs.pmnd.rs",
        protocol: "https",
      },
      {
        hostname: "avatars.githubusercontent.com",
        protocol: "https",
      },
    ],
  },
  transpilePackages: ["next-image-export-optimizer"],
  env: {
    nextImageExportOptimizer_imageFolderPath: "public/images",
    nextImageExportOptimizer_exportFolderPath: "out",
    nextImageExportOptimizer_quality: "75",
    nextImageExportOptimizer_storePicturesInWEBP: "true",
    nextImageExportOptimizer_exportFolderName: "next-image-export-optimizer",
    nextImageExportOptimizer_generateAndUseBlurImages: "true",
    nextImageExportOptimizer_remoteImageCacheTTL: "31536000",
  },
};

export default nextConfig;
