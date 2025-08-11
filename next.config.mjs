/** @type {import('next').NextConfig} */
const nextConfig = {
  rewrites: () => [
    {
      source: "/metadata/ogn/:tokenId(1\\w\*)",
      destination: "/metadata/ogn/tier1.json",
    },
    {
      source: "/metadata/ogn/:tokenId(2\\w\*)",
      destination: "/metadata/ogn/tier2.json",
    },
    {
      source: "/metadata/ogn/:tokenId(3\\w\*)",
      destination: "/metadata/ogn/tier3.json",
    },
    {
      source: "/metadata/OwnAIv1/:tokenId(\\d+)",
      destination: "/metadata/OwnAIv1/default.json",
    }
  ],
  reactStrictMode: true,
}

export default nextConfig
