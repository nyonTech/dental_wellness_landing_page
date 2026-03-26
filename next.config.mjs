/** @type {import('next').NextConfig} */
const nextConfig = {
  /* Keep off while using styled-jsx in client components to avoid hydration class mismatches */
  reactCompiler: false,
};

export default nextConfig;
