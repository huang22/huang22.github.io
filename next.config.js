/** @type {import('next').NextConfig} */
// module.exports = {
//   reactStrictMode: true,
//   images: {
//     domains: ["upcdn.io", "replicate.delivery"],
//   },
// };
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
    images: {
      unoptimized: true 
  },
}
 
module.exports = nextConfig
