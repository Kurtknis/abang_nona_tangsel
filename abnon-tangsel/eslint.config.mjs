import { dirname } from 'path';
import { fileURLToPath } from 'url';
import nextConfig from 'eslint-config-next';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const eslintConfig = [
  {
    ignores: [
      '.next/**',
      'dist/**',
      'node_modules/**',
      'out/**',
      'build/**',
    ],
  },
  ...nextConfig,
  {
    rules: {
      // Allow setState in effects for legitimate use cases like route change handlers
      'react-hooks/set-state-in-effect': 'warn',
    },
  },
];

export default eslintConfig;
