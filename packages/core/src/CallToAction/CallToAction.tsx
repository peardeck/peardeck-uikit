import React, { ReactNode } from "react";
import styled from "styled-components";
import { Button } from "../Button/Button";

const StyledCallToAction = styled.div`
  display: inline-flex;
  flex-direction: row;
  flex-grow: 1;
  align-items: center;
  justify-content: space-between;
  background-color: #edf0f4;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.08);
  border-radius: 0.375em;
  transition: all 0.25s ease;
  transform: translateZ(0px);

  :hover {
    transform: translateY(-2px);
    box-shadow: 0px 5px 3px 0px rgba(0, 0, 0, 0.08);
  }
`;

const StyledCallToActionContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 1em;
  max-width: 20em;
`;

const StyledCallToActionContent = styled.p`
  flex: 1;
  margin: 1em 0;
`;

const StyledCallToActionContentHeader = styled.h3`
  margin: 0.25em 0;
`;

const StyledCallToActionImageContainer = styled.div`
  background-color: #999;
  margin: 1em;
  padding: 1em;
`;

interface CallToActionPropTypes {
  children: ReactNode;
  title: ReactNode;
  image: ReactNode;
  buttonContent: ReactNode;
}

export const CallToAction = ({
  children,
  title,
  image,
  buttonContent,
}: CallToActionPropTypes): JSX.Element => (
  <StyledCallToAction>
    <StyledCallToActionContentContainer>
      <StyledCallToActionContentHeader>{title}</StyledCallToActionContentHeader>
      <StyledCallToActionContent>{children}</StyledCallToActionContent>
      <Button>{buttonContent}</Button>
    </StyledCallToActionContentContainer>
    <StyledCallToActionImageContainer>{image}</StyledCallToActionImageContainer>
  </StyledCallToAction>
);
