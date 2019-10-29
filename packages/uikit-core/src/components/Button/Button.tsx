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
} from "styled-system";
import { themeGet } from "@styled-system/theme-get";
import { darken } from "polished";
import { theme, ThemedComponentProps } from "../../theme/theme";

export type ButtonVariant = "default" | "primary" | "secondary";

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
    variant?: ButtonVariant;
  };

// TODO: fix icon color for darker backgrounds

/**
 * Button is used for actions, like in forms. Use \`Link\` components when
 * navigating a page or changing the URL.
 *
 * In special cases where you'd like to use a <a> styled like a Button,
 * use <Button as='a'> and provide an href.
 */
export const Button = styled.button<ButtonProps>`
  cursor: ${({ disabled }): string => (disabled ? "not-allowed" : "pointer")};
  transition: all 0.2s ease;

  > * {
    vertical-align: middle;
  }

  :disabled {
    opacity: 0.3;
  }

  /* By default calculate a darkened hover color -- but this can be overriden by the variant */
  :hover {
    background-color: ${(props): string =>
      darken(0.1, themeGet(`colors.${props.variant}`, "#ffffff")(props))}}
  }

  ${variant({
    prop: "variant",
    variants: {
      default: {
        color: "text",
        bg: "background",
      },
      primary: {
        color: "white",
        bg: "primary",
      },
      secondary: {
        color: "white",
        bg: "secondary",
      },
    },
  })}

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

  ${layout}
  ${border}
  ${color}
  ${shadow}
  ${space}
  ${typography}
`;

Button.defaultProps = {
  borderRadius: 3,
  boxShadow: 2,
  buttonSize: "medium",
  fontFamily: "inherit",
  fontWeight: "bold",
  lineHeight: "default",
  textAlign: "center",
  theme,
  variant: "default",
};

Button.displayName = "Button";
