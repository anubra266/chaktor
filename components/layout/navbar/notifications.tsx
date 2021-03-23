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
            top={0}
            right={0}
            display="inline-flex"
            alignItems="center"
            justifyContent="center"
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
            1
          </chakra.span>
        </>
      }
    />
  );
};

export default Notifications;
