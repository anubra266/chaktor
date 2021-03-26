import { GridItem, Stack } from "@chakra-ui/layout";
import React from "react";
import Cards from "./cards";

const Sales = () => {
  return (
    <Stack
      as={GridItem}
      colSpan={{ base: 12, lg: 6, xl: 4 }}
      p={3}
      layerStyle="card-dark"
      rounded="2xl"
    >
      <Cards />
    </Stack>
  );
};

export default Sales;
