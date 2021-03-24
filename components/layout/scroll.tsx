import { Box } from "@chakra-ui/layout";
import Scrollbar from "react-scrollbars-custom";

const Scroll = ({ children }: any) => {
  return (
    <Box pos="fixed" boxSize="full">
      <Scrollbar
        contentProps={{
          renderer: (props) => {
            const { elementRef, ...restProps } = props;
            return (
              <span {...restProps} style={{ padding: 0 }} ref={elementRef} />
            );
          },
        }}
        mobileNative
      >
        {children}
      </Scrollbar>
    </Box>
  );
};

export default Scroll;
