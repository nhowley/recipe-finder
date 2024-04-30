import { RecipeAppTheme } from "styled-components"
import { Size, TypographyVariant } from "../styles/styles.model"
import { ButtonSize } from "../components/Button/Button.model";

export const calcRem = (size: number): string => {
  const remSize = size >= 0 ? size / 16 : 0; 
  return `${remSize}rem`;
};

export const getIconSize = (theme: RecipeAppTheme, size?: Size): string => {
  const { xxSmall, xSmall, small, medium, large, xLarge, xxLarge} = theme.iconSize;

  const types = {
    xxSmall,
    xSmall,
    small,
    medium,
    large,
    xLarge,
    xxLarge,
    default: medium
  };

  return types[size ?? 'default']
}

export const getButtonFontSizeBySize = (
  theme: RecipeAppTheme,
  size: ButtonSize | undefined = 'medium'
) => {
  const fontSizes: Record<ButtonSize, TypographyVariant> = {
    small: 'bodyXS',
    medium: 'bodyS',
    large: 'body',
    xLarge: 'bodyL'
  }
  const { typography: { fontSize: { desktop } } } = theme

  const variant = fontSizes[size]

  return desktop[variant]
}


export const getButtonPaddingBySize = (
  theme: RecipeAppTheme,
  size: ButtonSize | undefined = 'medium'
) => {
  const spaces: Record<ButtonSize, number[]> = {
    small: [1, 1],
    medium: [1, 2],
    large: [1, 6],
    xLarge: [1, 7]
  }

  const space = spaces[size]

  return theme.spacing(...space)
}


export const getIconSizeByButtonSize = (
  size: ButtonSize | undefined = 'medium'
) => {
  const buttonSizes: Record<ButtonSize, string> = {
    small: calcRem(20),
    medium: calcRem(24),
    large: calcRem(28),
    xLarge: calcRem(32)
  }

  const iconSize = buttonSizes[size]

  return iconSize
}