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
import { useRouter } from "next/router";

const Sidebar = () => {
  const router = useRouter();
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
      {routes.map(({ name, ...props }, rid) => (
        <NavItem key={rid} active={router.pathname === props.href} {...props}>
          {name}
        </NavItem>
      ))}
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

const routes = [
  { name: "Dashboard", href: "/", icon: RiDashboardLine },
  { name: "Team Chat", href: "/team-chat", icon: HiOutlineChat },
  { name: "Calendar", href: "/calendar", icon: HiOutlineCalendar },
  { name: "Documents", href: "/documents", icon: HiOutlineFolder },
  { name: "Store", href: "/store", icon: BiBasket },
];
