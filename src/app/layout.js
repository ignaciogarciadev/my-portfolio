// layout.js
import { Inter } from 'next/font/google'
import './globals.css'
import { Analytics } from '@vercel/analytics/react';
import { AnimatePresence } from "framer-motion";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ignacio García | Desarrollador Full Stack',
  description: 'Portafolio de Ignacio García, desarrollador especializado en soluciones web con Next.js y Node.js. Descubre mis proyectos y habilidades.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Portafolio de Ignacio García, desarrollador especializado en soluciones web con Next.js y Node.js." />
        <meta property="og:title" content="Ignacio García | Desarrollador Full Stack" />
        <meta property="og:description" content="Descubre mis proyectos y habilidades como desarrollador freelance especializado en tecnología web." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ignaciogarcia.uy" />
        <meta property="og:image" content="/ruta/a/imagen.jpg" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>
        <AnimatePresence exitBeforeEnter>
          {children}
        </AnimatePresence>
        <Analytics />
      </body>
    </html>
  )
}
