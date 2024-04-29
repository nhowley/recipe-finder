import styled, { RecipeAppTheme, css } from "styled-components";
import { ButtonProps } from "./Button.model"
import { getButtonFontSizeBySize, getButtonPaddingBySize } from "../../utils/styles";

interface StyledButtonProps extends ButtonProps {
  theme: RecipeAppTheme
}

export const StyledButton = styled.button<StyledButtonProps>`
  display: flex;
  align-items: center; 
  padding: ${({ theme, size }) => getButtonPaddingBySize(theme, size)};
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease, border-color 0.3s ease, color 0.3s ease;
  font-size: ${({ theme, size }) => getButtonFontSizeBySize(theme, size)};

  ${({ theme, color, variant }) => {
    const { primary, secondary, accent } = theme.colors
    const buttonColor = color === 'primary' ? primary : secondary;

    if (variant === 'outlined') {
      return css`
        background-color: transparent;
        border: 2px solid ${buttonColor};
        color: ${buttonColor};
        
        &:hover {
          background-color: ${buttonColor};
          color: #fff;
        }
      `;
    } else if (variant === 'contained') {
      return css`
        background-color: ${buttonColor};
        color: #fff;
        
        &:hover {
          background-color: ${accent};
        }
      `;
    } else {
      // Default styles
      return css`
        background-color: ${primary};
        color: #fff;
        
        &:hover {
          background-color: ${accent};
        }
      `;
    }
  }}

  
`;
