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

export const SIZE_VARIANTS = [
  "xxsmall",
  "xsmall",
  "small",
  "medium",
  "large",
  "xlarge",
] as const;

export type ButtonColorVariant = keyof typeof theme.buttonColors;
export type ButtonStyleVariant = keyof typeof theme.buttonStyles;

export type ButtonSizeVariant = typeof SIZE_VARIANTS[number];

export type ButtonProps = BorderProps &
  ColorProps &
  LayoutProps &
  ShadowProps &
  SpaceProps &
  ThemedComponentProps &
  TypographyProps & {
    disabled?: boolean;
    sizeVariant?: ButtonSizeVariant;
    colorVariant?: ButtonColorVariant;
    styleVariant?: ButtonStyleVariant;
    textDecoration?: string;
  };

// TODO: fix icon color for darker backgrounds

/**
 * Button is used for actions, like in forms. Use \`Link\` components when
 * navigating a page or changing the URL.
 *
 * In special cases where you'd like to use an anchor element styled like a Button,
 * use <Button as='a'> and provide an href.
 */
export const Button = styled.button.attrs<ButtonProps>(
  ({ theme: currentTheme, colorVariant, styleVariant }) => ({
    ...{
      hoverBoxShadow: "buttonHover",
      activeBoxShadow: "buttonActive",
      boxShadow: "button",
    },
    ...currentTheme.buttonStyles[styleVariant || "default"],
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

  ${system({
    textDecoration: true,
  })}

  ${variant({
    prop: "sizeVariant",
    variants: {
      xxsmall: {
        fontSize: -3,
        px: 1,
        py: 1,
      },
      xsmall: {
        fontSize: -2,
        px: 2,
        py: 1,
      },
      small: {
        fontSize: -1,
        px: 2,
        py: 1,
      },
      medium: {
        fontSize: 0,
        px: 3,
        py: 1,
      },
      large: {
        fontSize: 1,
        px: 4,
        py: 2,
      },
      xlarge: {
        fontSize: 2,
        px: 4,
        py: 3,
      },
    },
  })}

  > svg {
    ${system({
      color: {
        property: "fill",
        scale: "colors",
      },
    })}
  }

  :hover {
    ${system({
      hoverBackgroundColor: {
        property: "backgroundColor",
        scale: "colors",
      },
      color: {
        property: "color",
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
      color: {
        property: "color",
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
  colorVariant: "default",
  sizeVariant: "medium",
  styleVariant: "default",
  fontFamily: "inherit",
  lineHeight: "default",
  textAlign: "center",
  textDecoration: "none",
  theme,
  type: "button",
};

Button.displayName = "Button";
