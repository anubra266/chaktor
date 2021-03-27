import { Box, Stack } from "@chakra-ui/layout";
import React, { createContext } from "react";
import Navbar from "./navbar";
import Page from "./page";
import Sidebar from "./sidebar";
import Scroll from "./scroll";
import { useDisclosure, UseDisclosureReturn } from "@chakra-ui/hooks";
import MobileSidebar from "./sidebar/mobile";
import { useMediaQuery } from "@chakra-ui/media-query";

export const NavContext = createContext<UseDisclosureReturn>(null);

const SiteLayout = ({ children }: any) => {
  const sidebarState = useDisclosure();
  const [isSmallScreen] = useMediaQuery("(max-width: 768px)");
  return (
    <Scroll>
      <NavContext.Provider value={sidebarState}>
        <Box textStyle="light">
          <Navbar />
          <Box pos="relative" h="max-content" m={[2, , 5]}>
            <Stack direction="row" spacing={{ md: 5 }}>
              <Sidebar />
              {isSmallScreen && <MobileSidebar />}
              <Page>{children}</Page>
            </Stack>
          </Box>
        </Box>
      </NavContext.Provider>
    </Scroll>
  );
};

export default SiteLayout;
