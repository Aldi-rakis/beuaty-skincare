import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  server: {
    host: true, // penting untuk akses via IP/ngrok
    allowedHosts: ['192.168.114.1', // tambahkan IP kamu di sini
      'localhost',
      '127.0.0.1'
    ],

    
    origin: 'https://ac94-182-253-124-159.ngrok-free.app', // optional, bisa dicoba
  },
  plugins: [
    tailwindcss(),
    react()
  ]
})
