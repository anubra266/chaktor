import { Flex, Spacer, Stack, Text } from "@chakra-ui/layout";
import React from "react";
import Actions from "./actions";
import Info from "./info";
import NavButton from "./nav-button";
import Search from "./search";
import { useRouter } from "next/router";
import { routes } from "../sidebar";

const Navbar = () => {
  const router = useRouter();

  const getRoute = () => {
    return routes.find(({ href }) => router.pathname === href).name;
  };

  return (
    <Flex
      layerStyle="card"
      h="4.5rem"
      roundedBottom={[, , "2xl"]}
      alignItems="center"
      p={5}
    >
      <Stack direction="row" w="full" alignItems="center" spacing={[0, , 8]}>
        <Info display={["none", , "flex"]} />
        <NavButton />

        <Spacer />
        <Text
          textStyle="default"
          fontSize="xl"
          fontWeight="semibold"
          fontFamily="cursive"
          display={{ md: "none" }}
        >
          {getRoute()}
        </Text>
        <Spacer />
        <Search display={["none", , "initial"]} />
        <Actions />
      </Stack>
    </Flex>
  );
};

export default Navbar;
