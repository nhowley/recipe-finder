import { calcRem } from "./utils/styles";

const spacingBaseUnit = 8

export const theme = {
    colors: {
      primary: '#ABC1CA',
      secondary: '#90708C',
      accent: '#C1D1C2'
    },
    typography: {
      fontFamily: 'Roboto, sans-serif',
      fontWeight: {
        light: 300,
        regular: 400,
        semibold: 500,
        bold: 700
      },
      fontSize: {
        desktop: {
          display: '36px',
          h1: '32px',
          h2: '28px',
          h3: '26px',
          h4: '22px',
          h5: '20px',
          h6: '18px',
          body: '16px',
          bodyS: '14px',
          bodyXS: '12px',
          bodyL: '18px'
        }
      }
    },
      // spacing

  spacing: (...args: number[]) => {
    const length = args.length
    if (length < 1 || length > 4) return '0px'

    return args.map(space => `${space * spacingBaseUnit}px`).join(' ')
  },
    // spacing: {
    //   small: '0.5rem',
    //   medium: '1rem',
    //   large: '2rem',
    //   // Add spacing values for margins, paddings, etc.
    // },
    radius: {
        none: '0px',
        xs: '4px',
        s: '10px',
        m: '19px',
        xl: '100%'
    },
    iconSize: {
      xxSmall: calcRem(14),
      xSmall: calcRem(16),
      small: calcRem(20),
      medium: calcRem(24),
      large: calcRem(32),
      xLarge: calcRem(36),
      xxLarge: calcRem(60)
    }
  };