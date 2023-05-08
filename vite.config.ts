import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  // Added this code from gpt upon react-router-dom occuring
  
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom']
  },

    // Added this code from gpt upon tsconfig.json react jsx occuring
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.json'],
  },

})
