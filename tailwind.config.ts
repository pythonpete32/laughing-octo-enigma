import type { Config } from 'tailwindcss'
/** @type {import('tailwindcss').Config} */
const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@aragon/ods/**/*.cjs.js',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: 'var(--ods-color-primary-50)',
          100: 'var(--ods-color-primary-100)',
          200: 'var(--ods-color-primary-200)',
          300: 'var(--ods-color-primary-300)',
          400: 'var(--ods-color-primary-400)',
          500: 'var(--ods-color-primary-500)',
          600: 'var(--ods-color-primary-600)',
          700: 'var(--ods-color-primary-700)',
          800: 'var(--ods-color-primary-800)',
          900: 'var(--ods-color-primary-900)',
        },
        ui: {
          0: 'var(--ods-color-neutral-0)',
          50: 'var(--ods-color-neutral-50)',
          100: 'var(--ods-color-neutral-100)',
          200: 'var(--ods-color-neutral-200)',
          300: 'var(--ods-color-neutral-300)',
          400: 'var(--ods-color-neutral-400)',
          500: 'var(--ods-color-neutral-500)',
          600: 'var(--ods-color-neutral-600)',
          700: 'var(--ods-color-neutral-700)',
          800: 'var(--ods-color-neutral-800)',
          900: 'var(--ods-color-neutral-900)',
        },
        info: {
          100: 'var(--ods-color-info-100)',
          200: 'var(--ods-color-info-200)',
          300: 'var(--ods-color-info-300)',
          400: 'var(--ods-color-info-400)',
          500: 'var(--ods-color-info-500)',
          600: 'var(--ods-color-info-600)',
          700: 'var(--ods-color-info-700)',
          800: 'var(--ods-color-info-800)',
          900: 'var(--ods-color-info-900)',
        },
        success: {
          100: 'var(--ods-color-success-100)',
          200: 'var(--ods-color-success-200)',
          300: 'var(--ods-color-success-300)',
          400: 'var(--ods-color-success-400)',
          500: 'var(--ods-color-success-500)',
          600: 'var(--ods-color-success-600)',
          700: 'var(--ods-color-success-700)',
          800: 'var(--ods-color-success-800)',
          900: 'var(--ods-color-success-900)',
        },
        warning: {
          100: 'var(--ods-color-warning-100)',
          200: 'var(--ods-color-warning-200)',
          300: 'var(--ods-color-warning-300)',
          400: 'var(--ods-color-warning-400)',
          500: 'var(--ods-color-warning-500)',
          600: 'var(--ods-color-warning-600)',
          700: 'var(--ods-color-warning-700)',
          800: 'var(--ods-color-warning-800)',
          900: 'var(--ods-color-warning-900)',
        },
        critical: {
          100: 'var(--ods-color-critical-100)',
          200: 'var(--ods-color-critical-200)',
          300: 'var(--ods-color-critical-300)',
          400: 'var(--ods-color-critical-400)',
          500: 'var(--ods-color-critical-500)',
          600: 'var(--ods-color-critical-600)',
          700: 'var(--ods-color-critical-700)',
          800: 'var(--ods-color-critical-800)',
          900: 'var(--ods-color-critical-900)',
        },
      },
      spacing: {
        0.1: '1px',
        0.25: '2px',
        0.5: '4px',
        0.75: '6px',
        1: '8px',
        1.5: '12px',
        1.75: '14px',
        2: '16px',
        2.5: '20px',
        3: '24px',
        3.5: '28px',
        4: '32px',
        5: '40px',
        6: '48px',
        8: '64px',
        10: '80px',
        14: '112px',
        18: '144px',
        20: '160px',
        25: '200px',
        28: '224px',
        30: '240px',
        40: '320px',
        43: '344px',
        50: '400px',
        84: '672px',
      },
      borderRadius: {
        larger: '10px',
      },
      boxShadow: {
        100: '0px 4px 8px rgba(31, 41, 51, 0.04), 0px 0px 2px rgba(31, 41, 51, 0.06), 0px 0px 1px rgba(31, 41, 51, 0.04)',
        200: '0px 10px 20px rgba(31, 41, 51, 0.04), 0px 2px 6px rgba(31, 41, 51, 0.04), 0px 0px 1px rgba(31, 41, 51, 0.04)',
        300: '0px 16px 24px rgba(31, 41, 51, 0.06), 0px 2px 6px rgba(31, 41, 51, 0.04), 0px 0px 1px rgba(31, 41, 51, 0.04)',
        400: '0px 24px 32px rgba(31, 41, 51, 0.04), 0px 16px 24px rgba(31, 41, 51, 0.04), 0px 4px 8px rgba(31, 41, 51, 0.04), 0px 0px 1px rgba(31, 41, 51, 0.04)',
      },
    },
    fontWeight: {
      normal: 500,
      semibold: 600,
      bold: 700,
    },
    screens: {
      tablet: '768px',
      lg: '1280px',
      desktop: '1440px',
      wide: '1920px',
    },
    fontFamily: {
      sans: ['Manrope'],
    },
    fontSize: {
      xs: ['0.64rem', 1.5],
      sm: ['0.8rem', 1.5],
      base: ['1rem', 1.5],
      lg: ['1.25rem', 1.5],
      xl: ['1.563rem', 1.2],
      '2xl': ['1.953rem', 1.2],
      '3xl': ['2.441rem', 1.2],
      '4xl': ['3.052rem', 1.2],
      '5xl': ['3.185rem', 1.2],
    },
  },
  plugins: [
    require('tailwindcss-fluid-type')({
      settings: {
        fontSizeMin: 0.875, // 14px
        fontSizeMax: 1, // 16px
        ratioMin: 1.2, // Minor third as minimum multiplicator
        ratioMax: 1.25, // Major third as maximum multiplicator
        screenMin: 20, // 320px
        screenMax: 96, // 1536px
        unit: 'rem',
        prefix: 'ft-',
      },
      values: {
        xs: [-2, 1.5],
        sm: [-1, 1.5],
        base: [0, 1.5],
        lg: [1, 1.5],
        xl: [2, 1.2],
        '2xl': [3, 1.2],
        '3xl': [4, 1.2],
        '4xl': [5, 1.2],
        '5xl': [6, 1.2],
      },
    }),
  ],
}
export default config
