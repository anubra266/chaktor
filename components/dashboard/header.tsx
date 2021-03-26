import React from "react";
import Icon from "@chakra-ui/icon";
import { Stack, Text } from "@chakra-ui/layout";
import PageHeader from "components/page-header";
import { IoIosArrowDown } from "react-icons/io";
import { RiDashboardLine } from "react-icons/ri";

const Header = () => {
  return (
    <PageHeader>
      <PageHeader.Title>Dashboard</PageHeader.Title>
      <PageHeader.Description>
        Whole data about your business here
      </PageHeader.Description>
      <PageHeader.Actions>
        <Stack direction="row">
          <Stack direction="row" alignItems="center">
            <Text>This week</Text>
            <Icon as={IoIosArrowDown} />
          </Stack>
          <Stack direction="row" alignItems="center">
            <Text>Change view</Text>
            <Icon as={RiDashboardLine} fontSize="2xl" />
          </Stack>
        </Stack>
      </PageHeader.Actions>
    </PageHeader>
  );
};

export default Header;
