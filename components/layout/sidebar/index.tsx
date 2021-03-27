import { Divider, Spacer, Stack } from "@chakra-ui/layout";
import React, { useContext } from "react";
import { RiDashboardLine } from "react-icons/ri";
import { BiBasket } from "react-icons/bi";
import {
  HiOutlineCalendar,
  HiOutlineChat,
  HiOutlineFolder,
} from "react-icons/hi";
import NavItem from "./nav-item";
import SectionDivider from "./section-divider";
import { FaIntercom, FaJira, FaSlack } from "react-icons/fa";
import IntegrationItem from "./integration-item";
import { FiPlus, FiPower, FiSettings } from "react-icons/fi";
import { useRouter } from "next/router";
import { NavContext } from "..";
import CollapsedItem from "./collapsed-item";

const Sidebar = () => {
  const router = useRouter();
  const { isOpen } = useContext(NavContext);
  const NavAction = isOpen ? CollapsedItem : NavItem;
  const IntegrationAction = isOpen ? CollapsedItem : IntegrationItem;
  return (
    <Stack
      layerStyle="card"
      rounded="xl"
      w={isOpen ? "60px" : "300px"}
      transition="width .4s ease-in-out"
      py={8}
      shadow="md"
      minH="full"
      spacing={2}
      fontSize="sm"
      display={["none", , "initial"]}
      overflowX={isOpen ? "initial" : "clip"}
    >
      {routes.map((props, rid) => (
        <NavAction
          key={`nav-item-${rid}`}
          active={router.pathname === props.href}
          {...props}
        />
      ))}
      {isOpen ? <Divider /> : <SectionDivider>Integrations</SectionDivider>}
      {integrations.map((props, iid) => (
        <IntegrationAction key={`int-item-${iid}`} {...props} />
      ))}
      <IntegrationAction name="Add new plugin" icon={FiPlus} scheme="purple" />
      <Spacer />
      <Divider display={{ md: "none" }} />
      <NavAction name="Settings" icon={FiSettings} />
      <NavAction name="Logout" icon={FiPower} />
    </Stack>
  );
};

export default Sidebar;

export const routes = [
  { name: "Dashboard", href: "/", icon: RiDashboardLine },
  { name: "Team Chat", href: "/team-chat", icon: HiOutlineChat, count: 3 },
  { name: "Calendar", href: "/calendar", icon: HiOutlineCalendar },
  { name: "Documents", href: "/documents", icon: HiOutlineFolder },
  { name: "Store", href: "/store", icon: BiBasket },
];

export const integrations = [
  {
    name: "Jira",
    scheme: "telegram",
    icon: FaJira,
  },
  {
    name: "Slack",
    scheme: "orange",
    icon: FaSlack,
  },
  {
    name: "Intercom",
    scheme: "blue",
    icon: FaIntercom,
  },
];
