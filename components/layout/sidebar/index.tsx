import { Spacer, Stack } from "@chakra-ui/layout";
import React from "react";
import { RiDashboardLine } from "react-icons/ri";
import { BiBasket } from "react-icons/bi";
import {
  HiOutlineCalendar,
  HiOutlineChat,
  HiOutlineFolder,
} from "react-icons/hi";
import NavItem from "./nav-item";
import SectionHeader from "./section-header";
import { FaIntercom, FaJira, FaSlack } from "react-icons/fa";
import IntegrationItem from "./integration-item";
import { FiPlus, FiPower, FiSettings } from "react-icons/fi";

const Sidebar = () => {
  return (
    <Stack
      layerStyle="card"
      rounded="xl"
      minW="240px"
      py={8}
      shadow="md"
      minH="full"
      spacing={2}
      fontSize="sm"
    >
      <NavItem active icon={RiDashboardLine}>
        Dashboard
      </NavItem>
      <NavItem count={3} icon={HiOutlineChat}>
        Team Chat
      </NavItem>
      <NavItem icon={HiOutlineCalendar}>Calendar</NavItem>
      <NavItem icon={HiOutlineFolder}>Documents</NavItem>
      <NavItem icon={BiBasket}>Store</NavItem>
      <SectionHeader>Integrations</SectionHeader>
      <IntegrationItem icon={FaJira} scheme="telegram">
        Jira
      </IntegrationItem>
      <IntegrationItem icon={FaSlack} scheme="orange">
        Slack
      </IntegrationItem>
      <IntegrationItem icon={FaIntercom} scheme="blue">
        Intercom
      </IntegrationItem>
      <IntegrationItem icon={FiPlus} scheme="purple">
        Add new plugin
      </IntegrationItem>
      <Spacer />
      <NavItem icon={FiSettings}>Settings</NavItem>
      <NavItem icon={FiPower}>Logout</NavItem>
    </Stack>
  );
};

export default Sidebar;
