import { Box } from "@chakra-ui/layout";
import Scrollbar from "react-scrollbars-custom";

const Scroll = ({ children }: any) => {
  return (
    <Box pos="fixed" boxSize="full">
      <Scrollbar>{children}</Scrollbar>
    </Box>
  );
};

export default Scroll;
