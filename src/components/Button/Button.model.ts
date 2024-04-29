import { ButtonHTMLAttributes } from 'react';
import { Color, Shape, Size } from '../../styles/styles.model';
import { IconComponentName } from '../SvgIcon/IconNames.model';

export type ButtonSize = Extract<Size, 'small' | 'medium' | 'large' | 'xLarge'>
export type ButtonVariant = 'contained' | 'outlined'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  color?: Color;
  shape?: Shape
  icon?: IconComponentName;
  iconColor?: string;
}
