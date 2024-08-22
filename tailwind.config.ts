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
        'color-input-d': string
        'color-attention': string
      }
      backgroundImage: { 'gradient-conic': string; 'gradient-radial': string }
    }
  }
  content: string[]
  mode?: 'jit' | 'aot'
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
        'color-dark': '#161616',
        'color-orange': '#F9AF15',
        'color-bg-gray': '#E5E5E5',
        'color-back': '#FAFAFA',
        'color-input-d': '#4A4A4A',
        'color-attention': '#E02350'
      }
    }
  },
  plugins: [],
  mode: 'aot'
}
export default config
