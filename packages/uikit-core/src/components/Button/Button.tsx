import styled from "styled-components";
import {
  border,
  BorderProps,
  color,
  ColorProps,
  layout,
  LayoutProps,
  shadow,
  ShadowProps,
  space,
  SpaceProps,
  typography,
  TypographyProps,
  variant,
  system,
} from "styled-system";
import { theme, ThemedComponentProps } from "../../theme/theme";

export type ButtonColorVariant = keyof typeof theme.buttonColors; // "default" | "primary" | "secondary";

export type ButtonSize = "small" | "medium" | "large";

export type ButtonProps = BorderProps &
  ColorProps &
  LayoutProps &
  ShadowProps &
  SpaceProps &
  ThemedComponentProps &
  TypographyProps & {
    disabled?: boolean;
    buttonSize?: ButtonSize;
    colorVariant?: ButtonColorVariant;
  };

// TODO: fix icon color for darker backgrounds

/**
 * Button is used for actions, like in forms. Use \`Link\` components when
 * navigating a page or changing the URL.
 *
 * In special cases where you'd like to use a <a> styled like a Button,
 * use <Button as='a'> and provide an href.
 */
export const Button = styled.button.attrs<ButtonProps>(
  ({ theme: currentTheme, colorVariant }) => ({
    hoverBoxShadow: "buttonHover",
    activeBoxShadow: "buttonActive",
    boxShadow: "button",
    ...currentTheme.buttonColors[colorVariant || "default"],
  })
)<ButtonProps>`
  cursor: ${({ disabled }): string => (disabled ? "not-allowed" : "pointer")};
  transition: all 0.2s ease;

  > * {
    vertical-align: middle;
  }

  :disabled {
    opacity: 0.3;
  }

  ${variant({
    prop: "buttonSize",
    variants: {
      small: {
        fontSize: 0,
        px: 2,
        py: 1,
      },
      medium: {
        fontSize: 2,
        px: 3,
        py: 2,
      },
      large: {
        fontSize: 4,
        px: 4,
        py: 3,
      },
    },
  })}

  :hover {
    ${system({
      hoverBackgroundColor: {
        property: "backgroundColor",
        scale: "colors",
      },
      hoverColor: {
        property: "color",
        scale: "colors",
      },
      hoverBoxShadow: {
        property: "boxShadow",
        scale: "shadows",
      },
    })}
  }

  :active {
    ${system({
      activeBgColor: {
        property: "backgroundColor",
        scale: "colors",
      },
      activeColor: {
        property: "color",
        scale: "colors",
      },
      activeBoxShadow: {
        property: "boxShadow",
        scale: "shadows",
      },
    })}
  }
  ${layout}
  ${border}
  ${color}
  ${shadow}
  ${space}
  ${typography}
`;

Button.defaultProps = {
  borderRadius: 3,
  borderWidth: 2,
  boxShadow: 2,
  buttonSize: "medium",
  fontFamily: "inherit",
  fontWeight: "bold",
  lineHeight: "default",
  textAlign: "center",
  theme,
  colorVariant: "default",
};

Button.displayName = "Button";
