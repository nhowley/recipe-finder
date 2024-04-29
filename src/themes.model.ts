import 'styled-components'
declare module 'styled-components' {

    interface IconSize {
        xxSmall: string
        xSmall: string
        small: string
        medium: string
        large: string
        xLarge: string
        xxLarge: string
      }

    interface FontSizes {
        display: string
        h1: string
        h2: string
        h3: string
        h4: string
        h5: string
        h6: string
        body: string
        bodyS: string
        bodyXS: string
        bodyL: string
    }

    interface FontWeight {
        light: number
        regular: number
        semibold: number
        bold: number
    }

    interface Colors {
        primary: string
        secondary: string
        accent: string
    }

    interface Spacing {
        small: string,
        medium: string,
        large: string,
    }

    export interface Radius {
        none: string
        xs: string
        s: string
        m: string
        xl: string
      }

    export interface RecipeAppTheme {
        colors: Colors
        typography: {
            fontFamily: string,
            fontWeight: FontWeight,
            fontSize: {
                desktop: FontSizes
            }
        }
        spacing: (...args: number[]) => string
        radius: Radius
        icon: IconSize
    }


}