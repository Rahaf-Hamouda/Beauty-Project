import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' // ✅ هذا السطر مهم جداً

export default defineConfig({
  plugins: [react()],
})
