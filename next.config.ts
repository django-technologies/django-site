import type { NextConfig } from "next";
import { buildSecurityHeaders } from "./src/lib/security-headers";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  images: {
    // 90 é usado nas capturas reais do Django AI (texto pequeno precisa de nitidez).
    qualities: [75, 90],
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: buildSecurityHeaders(process.env.NODE_ENV === "development"),
      },
    ];
  },
};

export default nextConfig;
