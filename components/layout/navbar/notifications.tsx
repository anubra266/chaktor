import { IconButton } from "@chakra-ui/button";
import { chakra } from "@chakra-ui/system";
import React from "react";
import { FiBell } from "react-icons/fi";

const Notifications = () => {
  return (
    <IconButton
      aria-label="Notifications"
      isRound
      size="sm"
      icon={
        <>
          <FiBell />
          <chakra.span
            pos="absolute"
            top="-1px"
            right="-1px"
            px={2}
            py={1}
            fontSize="xs"
            fontWeight="bold"
            lineHeight="none"
            color="red.100"
            transform="translate(50%,-50%)"
            bg="red.600"
            rounded="full"
          >
            8
          </chakra.span>
        </>
      }
    />
  );
};

export default Notifications;
