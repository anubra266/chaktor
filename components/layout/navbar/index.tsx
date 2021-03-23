import { Flex, Spacer, Stack } from "@chakra-ui/layout";
import React from "react";
import Info from "./info";
import Notifications from "./notifications";
import Profile from "./profile";
import Search from "./search";

const Navbar = () => {
  return (
    <Flex
      layerStyle="card"
      h="4.5rem"
      roundedBottom="2xl"
      alignItems="center"
      p={5}
    >
      <Stack direction="row" w="full" alignItems="center" spacing={8}>
        <Info />
        <Search />
        <Spacer />
        <Notifications />
        <Profile />
      </Stack>
    </Flex>
  );
};

export default Navbar;
