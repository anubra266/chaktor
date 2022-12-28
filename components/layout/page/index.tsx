import { Box } from "@chakra-ui/layout";
import React, { PropsWithChildren } from "react";

const Page = (props: PropsWithChildren) => {
  return <Box w="full">{props.children}</Box>;
};

export default Page;
