/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['framer-motion'],
  webpack: (config, { isServer }) => {
    // Configuração para resolver problemas com módulos ESM
    config.resolve.extensionAlias = {
      '.js': ['.js', '.ts', '.tsx'],
      '.mjs': ['.mjs', '.mts'],
    };
    
    // Adicionar configuração específica para framer-motion
    config.module.rules.push({
      test: /node_modules\/framer-motion/,
      type: 'javascript/auto',
    });
    
    return config;
  },
};

export default nextConfig;
