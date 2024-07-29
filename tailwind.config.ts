import type { Config } from 'tailwindcss'

const config: {
  plugins: any[]
  theme: {
    extend: {
      colors: {
        'color-dark': string
        'color-orange': string
        'color-bg-gray': string
        'color-back': string
      }
      backgroundImage: { 'gradient-conic': string; 'gradient-radial': string }
    }
  }
  content: string[]
} = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      },
      colors: {
        'color-bg-gray': '#EFEFEF',
        'color-orange': '#f9af15',
        'color-dark': '#161616',
        'color-back': '#FAFAFA'
      }
    }
  },
  plugins: []
}
export default config
