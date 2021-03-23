import { IconButton, IconButtonProps } from "@chakra-ui/button";
import Icon from "@chakra-ui/icon";
import { Stack, Text } from "@chakra-ui/layout";
import { useColorModeValue as mode } from "@chakra-ui/system";
import React, { ReactNode } from "react";
import { IconType } from "react-icons";

type IntegrationItem = {
  icon: IconType;
  scheme?: IconButtonProps["colorScheme"];
  children: ReactNode;
};
const IntegrationItem = (props: IntegrationItem) => {
  const hoverColor = mode("blue.600", "white");
  return (
    <Stack
      direction="row"
      cursor="pointer"
      px={8}
      py={2}
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
      <Text>{props.children}</Text>
    </Stack>
  );
};

export default IntegrationItem;
