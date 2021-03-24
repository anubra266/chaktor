import { Flex, Spacer, Stack, Text } from "@chakra-ui/layout";
import Logo from "components/logo";
import React from "react";
import NavButton from "./nav-button";

const Info = () => {
  return (
    <Stack direction="row" alignItems="center">
      <Logo />
      <Flex direction="column" lineHeight="5">
        <Text fontSize="lg" fontWeight="semibold" textStyle="default">
          Chaktor
        </Text>
        <Text fontSize="sm">anubra266@chaktor.dev</Text>
      </Flex>
      <Spacer />
      <NavButton />
    </Stack>
  );
};

export default Info;
