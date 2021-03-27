import { IconButton } from "@chakra-ui/button";
import Icon from "@chakra-ui/icon";
import { Flex, Spacer, Stack, Text } from "@chakra-ui/layout";
import React from "react";
import { RiArrowDropRightLine } from "react-icons/ri";

const Item = (props: any) => {
  const { item } = props;
  return (
    <Stack direction="row" alignItems="center" spacing={4}>
      <Icon as={item.icon} color="brand.400" />
      <Flex direction="column">
        <Text textStyle="default">{item.title}</Text>
        <Text fontSize="xs">{item.description}</Text>
      </Flex>
      <Spacer />
      <IconButton
        aria-label={item.title}
        variant="ghost"
        size="sm"
        fontSize="lg"
        icon={<Icon as={RiArrowDropRightLine} />}
      />
    </Stack>
  );
};

export default Item;
