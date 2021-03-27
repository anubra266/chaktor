import { Flex, Spacer, Stack, Text } from "@chakra-ui/layout";
import React from "react";
import { BiBasket } from "react-icons/bi";
import { CgNotes } from "react-icons/cg";
import { HiOutlineChat } from "react-icons/hi";
import Item from "./item";

const Help = () => {
  const items = [
    {
      title: "Best offers",
      description: "Check out our new best offers",
      icon: BiBasket,
    },
    {
      title: "Invoices",
      description: "Whole documentation",
      icon: CgNotes,
    },
    {
      title: "Support requests",
      description: "All requests from your clients",
      icon: HiOutlineChat,
    },
  ];
  return (
    <Stack spacing={5}>
      <Flex alignItems="baseline">
        <Text textStyle="default">Popular Items</Text>
        <Spacer />
        <Text fontSize="sm">All Feed</Text>
      </Flex>
      {items.map((item, iid) => (
        <Item key={`item-${iid}`} item={item} />
      ))}
    </Stack>
  );
};

export default Help;
