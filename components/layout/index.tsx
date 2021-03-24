import { Box, Stack } from "@chakra-ui/layout";
import React from "react";
import Navbar from "./navbar";
import Page from "./page";
import Sidebar from "./sidebar";
import Scroll from "./scroll";

const SiteLayout = ({ children }: any) => {
  return (
    <Scroll>
      <Box textStyle="light">
        <Navbar />
        <Box pos="relative" h="max-content" m={5}>
          <Stack direction="row" spacing={5}>
            <Sidebar />
            <Page>{children}</Page>
          </Stack>
        </Box>
      </Box>
    </Scroll>
  );
};

export default SiteLayout;
