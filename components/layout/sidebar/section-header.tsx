import { Box, BoxProps } from "@chakra-ui/layout";
import React from "react";

const SectionHeader = (props: BoxProps) => {
  return <Box textTransform="uppercase" px={8} pt={4} {...props} />;
};

export default SectionHeader;
