import { Flex, Spacer, Stack, Text } from "@chakra-ui/layout";
import React, { ReactNode } from "react";

type JustChild = { children: ReactNode };
type PageHeader = {
  Title: typeof Title;
  Description: typeof Description;
  Actions: typeof Actions;
};
const PageHeader: React.FC & PageHeader = ({ children }: JustChild) => {
  return (
    <Flex w="full" direction="column">
      {getChild(children, "Title")}
      <Stack direction="row" alignItems="center">
        {getChild(children, "Description")}
        <Spacer />
        {getChild(children, "Actions")}
      </Stack>
    </Flex>
  );
};

const Title = ({ children }: JustChild) => {
  return (
    <Text textStyle="default" fontSize="2xl" fontWeight="semibold">
      {children}
    </Text>
  );
};

const Description = ({ children }: JustChild) => {
  return <Text>{children}</Text>;
};

const Actions = ({ children }: JustChild) => {
  return <>{children}</>;
};

PageHeader.Title = Title;
PageHeader.Description = Description;
PageHeader.Actions = Actions;
export default PageHeader;

const getChild = (children: any, type: string) =>
  React.Children.map(
    children,
    (child: any) => child.type.name === type && child
  );
