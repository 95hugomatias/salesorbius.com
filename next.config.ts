import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // non-www → www (single hop, 301)
      {
        source: "/:path*",
        has: [{ type: "host", value: "salesorbius.com" }],
        destination: "https://www.salesorbius.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
