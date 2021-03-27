import { HStack } from "@chakra-ui/layout";
import { useColorModeValue as mode } from "@chakra-ui/system";
import { TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/tabs";
import React from "react";
import Help from "./help";
import Tab from "./tab";
import Team from "./team";

const Feed = () => {
  const bg = mode("gray.50", "bg.800");
  return (
    <Tabs my={2}>
      <TabList rounded="2xl" bg={bg} p={2} border="none" as={HStack}>
        <Tab>Help</Tab>
        <Tab>Teams</Tab>
      </TabList>
      <TabPanels>
        <TabPanel p={0} mt={5}>
          <Help />
        </TabPanel>
        <TabPanel p={0} mt={5}>
          <Team />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default Feed;
