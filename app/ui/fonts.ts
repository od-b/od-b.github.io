import { Inter, JetBrains_Mono } from 'next/font/google';

export const inter = Inter({
  subsets: ['latin']
});

export const jetbrainsmono = JetBrains_Mono({
  subsets: ['latin'],
  style: 'normal'
})

export const fonts = { inter, jetbrainsmono }
