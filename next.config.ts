import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // 90 é usado nas capturas reais do Django AI (texto pequeno precisa de nitidez).
    qualities: [75, 90],
  },
};

export default nextConfig;
