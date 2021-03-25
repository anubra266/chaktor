import { IconButton, IconButtonProps } from "@chakra-ui/button";
import Icon from "@chakra-ui/icon";
import { Stack, Text } from "@chakra-ui/layout";
import { useColorModeValue as mode } from "@chakra-ui/system";
import React from "react";
import { IconType } from "react-icons";

type IntegrationItem = {
  icon: IconType;
  scheme?: IconButtonProps["colorScheme"];
  name: string;
};
const IntegrationItem = (props: IntegrationItem) => {
  const hoverColor = mode("brand.600", "white");
  return (
    <Stack
      direction="row"
      cursor="pointer"
      px={8}
      py={3}
      fontWeight="semibold"
      alignItems="center"
      _hover={{
        color: hoverColor,
        bg: "blackAlpha.300",
      }}
      transition="all .4s ease-in-out"
      spacing={4}
    >
      <IconButton
        aria-label="Interation"
        size="xs"
        variant="outline"
        isRound
        colorScheme={props.scheme}
        icon={<Icon as={props.icon} />}
      />
      <Text>{props.name}</Text>
    </Stack>
  );
};

export default IntegrationItem;
