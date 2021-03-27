import { Stack } from "@chakra-ui/layout";
import React from "react";
import Advert from "./advert";
import Cards from "./cards";
import Feed from "./feed";

const Sales = () => {
  return (
    <Stack
      p={3}
      layerStyle="card-dark"
      rounded="2xl"
      spacing={[2, , 5]}
      w="300px"
      shadow="md"
    >
      <Cards />
      <Feed />
      <Advert />
    </Stack>
  );
};

export default Sales;
