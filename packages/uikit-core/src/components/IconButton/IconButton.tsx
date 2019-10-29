// import React from "react";
import styled from "styled-components";
import { Button } from "../Button/Button";

// TODO fix the SVG fill color issue.

// type StyledIconButtonProps = ButtonProps & {};

export const IconButton = styled(Button)`
  border-radius: 100%;

  > svg {
    fill: white;
  }

  :hover {
    > svg {
      transform: scale(1.1);
    }
  }
`;

// There are some outstanding bugs when making a button a flex container
// https://github.com/philipwalton/flexbugs#9-some-html-elements-cant-be-flex-containers
// So in order to get vertical+horizontal alignment more easily we
// just wrap the content in an additional span and use flex on that.
// const ButtonContentWrapper = styled.span`
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `;
// <ButtonContentWrapper>{children}</ButtonContentWrapper>

// // const IconButtonProps extends StyledIconButton

// export const IconButton: React.FunctionComponent<ButtonProps> = ({
//   children,
//   ...props
// }) => (
//   <StyledIconButton {...props}>
//     <ButtonContentWrapper>{children}</ButtonContentWrapper>
//   </StyledIconButton>
// );

// export const IconButton: React.FunctionComponent<
//   ButtonProps & { children?: React.ReactChild }
// > = ({ children, ...props }) => (
//   // eslint-disable-next-line react/jsx-props-no-spreading
//   <Button {...props}>
//     <ButtonContentWrapper>{children}</ButtonContentWrapper>
//   </Button>
// );
// export const IconButton = React.forwardRef<"button", StyledIconButtonProps>(
//   (props, ref) => (
//     <StyledIconButton {...props} ref={ref}>
//       <ButtonContentWrapper>{props.children}</ButtonContentWrapper>
//     </StyledIconButton>
//   )
// );
// export const IconButton: React.FunctionComponent<typeof Button> = ({
//   children,
//   ...props
// }) => <Button {...props}>{children}</Button>;

IconButton.defaultProps = {
  fontSize: 2,
  size: "2.5em",
};

IconButton.displayName = "IconButton";
