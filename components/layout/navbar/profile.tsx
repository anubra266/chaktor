import { Avatar, AvatarBadge } from "@chakra-ui/avatar";
import Icon from "@chakra-ui/icon";
import { HStack } from "@chakra-ui/layout";
import React from "react";
import { IoIosArrowDown } from "react-icons/io";
const Profile = () => {
  return (
    <HStack alignItems="center">
      <Avatar
        name="anubra266"
        src="https://avatars.githubusercontent.com/u/30869823?s=460&u=7fee47eb223768507a386694806007e3a248dad4&v=4"
        size="sm"
      >
        <AvatarBadge boxSize="1.25em" bg="green.500" />
      </Avatar>
      <Icon as={IoIosArrowDown} />
    </HStack>
  );
};

export default Profile;
