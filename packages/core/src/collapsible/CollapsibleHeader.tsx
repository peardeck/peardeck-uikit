import React from 'react';
import styled from "styled-components";
import { IconCollapseArrow } from '@pearkit/icons';

const StyledCollapsibleHeader = styled.button`
  color: #547272;
  display: flex;
  align-items: center;
  border: 0;
  background-color: transparent;
  appearance: none;
  width: 100%;
  text-align: left;
  margin: 0;
  padding: 0.5em;
  cursor: pointer;

  :focus {
    outline: 0;
  }
`;

const StyledCollapsibleHeaderContent = styled.div`
  flex: 1;
`;

const StyledCollapsibleHeaderTitle = styled.div`
  font-size: 2em;
  text-transform: uppercase;
`;

const StyledCollapsibleHeaderSubTitle = styled.div`
  font-size: 1.25em;
`
const StyledCollapsibleHeaderIcon = styled.div`
  transform: ${({ collapsed }: { collapsed: boolean }) => collapsed ? "rotate(180deg)" : "rotate(0deg)"};
  opacity: 0.7;
  transition: all 0.3s;
`;

export interface CollapsibleHeaderProps {
  /**
   * The main text to display in the header of the collapsible.
   */
  title: string,
  subTitle?: string
  collapsed: boolean
  onCollapsedChange: Function
}

export const CollapsibleHeader = ({ onCollapsedChange, title, subTitle, collapsed, ...props }: CollapsibleHeaderProps) => (
  <StyledCollapsibleHeader {...props} onClick={() => onCollapsedChange(!collapsed)}>
    <StyledCollapsibleHeaderContent>
      <StyledCollapsibleHeaderTitle>{title}</StyledCollapsibleHeaderTitle>
      {subTitle && (<StyledCollapsibleHeaderSubTitle>{subTitle}</StyledCollapsibleHeaderSubTitle>)}
    </StyledCollapsibleHeaderContent>
    <StyledCollapsibleHeaderIcon collapsed={collapsed}>
      <IconCollapseArrow />
    </StyledCollapsibleHeaderIcon>
  </StyledCollapsibleHeader>
);
