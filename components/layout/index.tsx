import { Box } from "@chakra-ui/layout";
import React from "react";
import Navbar from "./navbar";

const SiteLayout = ({ children }: any) => {
  return (
    <Box textStyle="light">
      <Navbar />
      {/* {children}  */}
    </Box>
  );
};

export default SiteLayout;
