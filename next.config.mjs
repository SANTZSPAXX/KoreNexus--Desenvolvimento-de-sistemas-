/**
 * @company Kore Nexus
 * @version 1.0.2
 * @last_update 2026-05-28 11:46:00
 * @author Guilherme Santiago
 * @changelog
 * - Injeção da propriedade basePath para responder em /jundiai
 * - Preservação das configurações de ignoreBuildErrors e unoptimized images
 */

/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/jundiai',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
