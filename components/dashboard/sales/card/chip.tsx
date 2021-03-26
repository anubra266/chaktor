import { Box, Flex } from "@chakra-ui/layout";
import React from "react";

const Chip = () => {
  return (
    <Flex
      pos="absolute"
      left="20px"
      top="20px"
      w="50px"
      h="40px"
      alignItems="center"
      justify="center"
      rounded="md"
      bgGradient="linear(to-bl, #ffecc7, #d0b978)"
      overflow="hidden"
    >
      <Box pos="absolute" w="full" h="1px" bg="#333" top="13px" />
      <Box pos="absolute" w="full" h="1px" bg="#333" top="20px" />
      <Box pos="absolute" w="full" h="1px" bg="#333" top="28px" />
      <Box pos="absolute" bg="#333" left="25px" w="1px" h="50px" />
      <Box
        w="20px"
        h="25px"
        border="1px solid #333"
        rounded="3px"
        bgGradient="linear(to-bl, #efdbab, #e1cb94)"
        zIndex={1}
      />
    </Flex>
  );
};

export default Chip;
