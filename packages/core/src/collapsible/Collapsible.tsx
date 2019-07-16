import React, { useState } from "react";
import styled from "styled-components";
import { CollapsibleHeader, CollapsibleHeaderProps } from './CollapsibleHeader';

interface CollapsibleProps extends CollapsibleHeaderProps {
  onCollapsedChange: Function
  children: React.ReactNode
}

const StyledCollapsible = styled.div`
  border: 1px solid #eee;
`

interface StyledCollapsibleContentProps {
  collapsed: boolean
}

const StyledCollapsibleContent = styled.div<StyledCollapsibleContentProps>`
  transition: all .5s;
  overflow: hidden;
  max-height: ${({ collapsed }: { collapsed: boolean }) => collapsed ? "0" : "600px"};
`;

export const Collapsible = ({ children, collapsed, onCollapsedChange, ...props }: CollapsibleProps) => (
  <StyledCollapsible {...props}>
    <CollapsibleHeader
      title='The Title'
      subTitle='A subtitle goes here'
      collapsed={collapsed}
      onCollapsedChange={onCollapsedChange}
    />
    <StyledCollapsibleContent collapsed={collapsed}>
      {children}
    </StyledCollapsibleContent>
  </StyledCollapsible>
);

interface UncontrolledCollapsibleProps {
  title: string,
  subTitle?: string
  children: React.ReactNode
}

export const UncontrolledCollapsible = (props: UncontrolledCollapsibleProps) => {
  const [collapsed, onCollapsedChange] = useState(false);
  return (<Collapsible {...props} collapsed={collapsed} onCollapsedChange={onCollapsedChange} />)
};
