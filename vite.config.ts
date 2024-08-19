import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    server: {
        host: true,
        port: 9000,
        proxy: {
            '/api': {
                target: 'http://localhost:8080',
                changeOrigin: true,
                secure: false,
                rewrite: path => path.replace(/^\/api/, ''),
            },
        },
    },
    plugins: [
        react()
    ],
    resolve: {
        alias: {
            '@': '/src'
        }
    }
})
