import React from "react";
import { Box, BoxProps } from "@chakra-ui/layout";
import { useColorModeValue as mode } from "@chakra-ui/system";
import { useTab } from "@chakra-ui/tabs";

const Tab = (props: any) => {
  const tabProps = useTab(props);
  const isSelected = !!tabProps["aria-selected"];
  const bg = mode("white", "blackAlpha.700");

  const selectedStyles: BoxProps = isSelected && {
    bg: bg,
    shadow: "lg",
    textStyle: "default",
  };
  return (
    <Box
      {...tabProps}
      {...selectedStyles}
      transition="all .3s ease-in-out"
      rounded="xl"
      w="50%"
      p={1}
      cursor="pointer"
      textAlign="center"
      fontWeight="md"
    >
      {tabProps.children}
    </Box>
  );
};

export default Tab;
