import React, { useState } from "react";
import styled from "styled-components";
import { CollapsibleHeader, CollapsibleHeaderProps } from "./CollapsibleHeader";

export interface CollapsibleProps extends CollapsibleHeaderProps {
  /**
   * Called when the collapsed state should be changed.
   *
   * Signature:
   * ```
   * onCollapsedChanged(shouldBeCollapsed: boolean)
   * ```
   */
  onCollapsedChange: Function;

  /**
   * The content to render in the collapsible content section.
   */
  children: React.ReactNode;
}

const StyledCollapsible = styled.div`
  border: 1px solid #eee;
`;

interface StyledCollapsibleContentProps {
  collapsed: boolean;
}

const StyledCollapsibleContent = styled.div<StyledCollapsibleContentProps>`
  transition: all 0.5s;
  overflow: hidden;
  max-height: ${({ collapsed }: { collapsed: boolean }): string =>
    collapsed ? "0" : "600px"};
`;

/**
 *  Provides a container with a clickable header that will collapse and expand child content.
 */
export const Collapsible = ({
  children,
  collapsed,
  onCollapsedChange,
  ...props
}: CollapsibleProps): JSX.Element => (
  <StyledCollapsible {...props}>
    <CollapsibleHeader
      title="The Title"
      subTitle="A subtitle goes here"
      collapsed={collapsed}
      onCollapsedChange={onCollapsedChange}
    />
    <StyledCollapsibleContent collapsed={collapsed}>
      {children}
    </StyledCollapsibleContent>
  </StyledCollapsible>
);

interface UncontrolledCollapsibleProps {
  /**
   * Test!
   */
  title: string;
  /* Subtitle info goes here? */
  subTitle?: string;
  children: React.ReactNode;
}

export const UncontrolledCollapsible = (
  props: UncontrolledCollapsibleProps
): JSX.Element => {
  const [collapsed, onCollapsedChange] = useState(false);
  return (
    <Collapsible
      {...props}
      collapsed={collapsed}
      onCollapsedChange={onCollapsedChange}
    />
  );
};
