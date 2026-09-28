import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'EvoY | Gestão de estoque inteligente',
  description: 'Controle seu estoque, movimentações e operação com a tecnologia EvoY.',
  generator: 'EvoY',
  icons: { icon: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-JcVgqqyxtD9hbKYA1tgJ3nrsnFbXVG.png', apple: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-JcVgqqyxtD9hbKYA1tgJ3nrsnFbXVG.png' },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#07111f',
  userScalable: true,
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body className="antialiased">{children}{process.env.NODE_ENV === 'production' && <Analytics />}</body></html>
}

export const dynamic = 'force-static'
