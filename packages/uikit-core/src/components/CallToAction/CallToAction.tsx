import React, { ReactNode } from "react";
import { Box } from "../Box/Box";
import { Card, CardProps } from "../Card/Card";
import { Button } from "../Button/Button";
import { Heading2 } from "../Heading/Heading";

export type CallToActionProps = CardProps & {
  children?: ReactNode;
  title: ReactNode;
  image?: ReactNode;
  buttonContent: ReactNode;
};

export const CallToAction = ({
  children,
  title,
  image,
  buttonContent,
}: CallToActionProps): JSX.Element => (
  <Card p={2} display="inline-flex">
    <Box display="inline-flex" flexDirection="column" alignItems="flex-start">
      <Heading2 paddingLeft={1} marginBottom={2}>
        {title}
      </Heading2>
      <Box paddingLeft={1} marginTop={2} marginBottom={1}>
        {children}
      </Box>
      <Button
        colorVariant="accent"
        marginTop={1}
        borderRadius={4}
        sizeVariant="large"
      >
        {buttonContent}
      </Button>
    </Box>
    {image && (
      <Card marginLeft={2} depth={0}>
        {image}
      </Card>
    )}
  </Card>
);

CallToAction.displayName = "CallToAction";
