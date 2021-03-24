import { Box, Stack, useColorModeValue as mode } from "@chakra-ui/react";
import React, { useContext } from "react";
import { NavContext } from "..";

const NavButton = () => {
  const { onToggle, isOpen } = useContext(NavContext);
  const color = mode("blue", "brand");
  const barStyle = {
    w: "20px",
    h: "2.2px",
    bg: `${color}.400`,
    transition: "all .4s ease-in-out",
  };
  return (
    <Stack
      justify="center"
      alignItems="center"
      fontSize="6xl"
      fontWeight="700"
      cursor="pointer"
      onClick={onToggle}
      zIndex="tooltip"
      spacing="4px"
    >
      <Box
        {...barStyle}
        transform={isOpen && "rotate(45deg) translate(0px, 1px)"}
      />
      <Box {...barStyle} w={!isOpen && "14px"} />
      <Box
        {...barStyle}
        transform={isOpen && "rotate(-45deg) translate(7px, -8px)"}
      />
    </Stack>
  );
};

export default NavButton;
