import React from 'react';
import { StyledButton } from './Button.styled';
import { ButtonProps } from './Button.model';
import { SvgIcon } from '../SvgIcon/SvgIcon';
import { getIconSizeByButtonSize } from '../../utils/styles';

const Button: React.FC<ButtonProps> = ({ children, variant = 'contained', icon, size, iconColor, ...rest }) => {
  const iconSize = getIconSizeByButtonSize(size)

  return <StyledButton variant={variant} size={size} {...rest}>
    {icon && <SvgIcon iconName={icon} fill={iconColor} iconSize={iconSize} />}
    {children}
    </StyledButton>;
};

export default Button;
