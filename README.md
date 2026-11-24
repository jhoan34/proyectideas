# Project Idea Generator

Aplicación web para generar ideas de proyectos según los parámetros elegidos por el usuario, conectada a la API de OpenAI.

**Demo:** [proyectideas.vercel.app](https://proyectideas.vercel.app)

## Stack

- **Framework:** Next.js 16, React 19, TypeScript, Tailwind CSS 4.
- **IA:** OpenAI SDK.
- **UI y formularios:** Radix UI, Framer Motion, React Hook Form, Zod, Sonner.

## Desarrollo local

1. Instala dependencias:
   ```bash
   npm install
   ```
2. Agrega tu clave de OpenAI en `.env.local`:
   ```env
   OPENAI_API_KEY=...
   ```
3. Inicia el servidor:
   ```bash
   npm run dev
   ```
   Abre `http://localhost:3000`.
