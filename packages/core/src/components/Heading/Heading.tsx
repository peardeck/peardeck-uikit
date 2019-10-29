import styled from "styled-components";
import { Text } from "../Text/Text";
import { theme } from "../../theme/theme";

/**
 * The Heading component will render an html h1-6 tag without any default styling.
 */
export const Heading1 = styled(Text).attrs({ as: "h1" })``;

Heading1.displayName = "Heading1";

Heading1.defaultProps = {
  m: 0,
  theme,
};

// Alias `Heading` to `Heading1`
export const Heading = Heading1;

export const Heading2 = styled(Heading).attrs({ as: "h2" })``;
Heading2.displayName = "Heading2";

export const Heading3 = styled(Heading).attrs({ as: "h3" })``;
Heading3.displayName = "Heading3";

export const Heading4 = styled(Heading).attrs({ as: "h4" })``;
Heading4.displayName = "Heading4";

export const Heading5 = styled(Heading).attrs({ as: "h5" })``;
Heading5.displayName = "Heading5";

export const Heading6 = styled(Heading).attrs({ as: "h6" })``;
Heading6.displayName = "Heading6";
