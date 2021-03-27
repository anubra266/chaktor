import { Flex, Spacer, Stack, Text } from "@chakra-ui/layout";
import React from "react";
import Item from "./item";

const Team = () => {
  const items = [];
  return (
    <Stack spacing={5}>
      <Flex alignItems="baseline">
        <Text textStyle="default">Activities</Text>
        <Spacer />
        <Text fontSize="sm">All Activities</Text>
      </Flex>
      {items.map((item, iid) => (
        <Item key={`item-${iid}`} item={item} />
      ))}
    </Stack>
  );
};

export default Team;
