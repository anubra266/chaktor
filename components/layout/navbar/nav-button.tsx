import { Box, Icon, IconButton, Stack, StackProps } from "@chakra-ui/react";
import React, { useContext } from "react";
import { CgClose, CgMenu } from "react-icons/cg";
import { NavContext } from "..";

const NavButton = (props: StackProps) => {
  const { onToggle, isOpen } = useContext(NavContext);
  const icon = isOpen ? CgMenu : CgClose;
  return (
    <IconButton
      colorScheme="brand"
      variant="ghost"
      fontSize="2xl"
      aria-label="Toggle Actions"
      icon={<Icon as={icon} />}
      transition="all .4s ease-in-out"
      onClick={onToggle}
    />
  );
};

export default NavButton;
