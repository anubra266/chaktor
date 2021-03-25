import Icon from "@chakra-ui/icon";
import {
  BoxProps,
  LinkBox,
  LinkOverlay,
  Spacer,
  Stack,
  Text,
} from "@chakra-ui/layout";
import { chakra, useColorModeValue as mode } from "@chakra-ui/system";
import React, { ReactNode } from "react";
import { IconType } from "react-icons";
import NextLink from "next/link";

type NavItem = {
  icon: IconType;
  children: ReactNode;
  active?: boolean;
  count?: number;
  href?: string;
};
const NavItem = (props: NavItem) => {
  const activeColor = mode("brand.600", "white");
  const activeProps: BoxProps = {
    color: activeColor,
    borderRightColor: props.active && activeColor,
    bg: "blackAlpha.300",
  };
  return (
    <LinkBox>
      <Stack
        direction="row"
        cursor="pointer"
        px={8}
        py={4}
        spacing={4}
        alignItems="center"
        fontWeight="semibold"
        transition="all .4s ease-in-out"
        borderRightWidth="3px"
        borderRightColor="transparent"
        _hover={activeProps}
        {...(props.active && activeProps)}
      >
        <Icon as={props.icon} fontSize="xl" />
        <NextLink href={props.href || ""} passHref>
          <LinkOverlay>
            <Text>{props.children}</Text>
          </LinkOverlay>
        </NextLink>
        <Spacer />
        {props.count && (
          <chakra.span
            display="inline-flex"
            alignItems="center"
            justifyContent="center"
            px={2}
            py={1}
            fontSize="xs"
            fontWeight="bold"
            lineHeight="none"
            color="pink.50"
            bg="pink.500"
            rounded="full"
          >
            {props.count}
          </chakra.span>
        )}
      </Stack>
    </LinkBox>
  );
};

export default NavItem;
